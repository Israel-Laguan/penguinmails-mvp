"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getIdTokenResult, User } from "firebase/auth";
import { authClient } from "@/lib/firebase/firebase-client";

type Claims = {
  name: string;
  role: string;
  companyId: string;
  companyName: string;
  plan: string;
} | null;

type AuthContextType = {
  user: User | null;
  claims: Claims;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  claims: null,
  loading: true,
});

const MAX_POLLING_ATTEMPTS = 10;
const POLLING_INTERVAL_MS = 1000;

async function fetchClaimsWithPolling(user: User) {
  for (let i = 0; i < MAX_POLLING_ATTEMPTS; i++) {
    const tokenResult = await getIdTokenResult(user, true);
    const claims = tokenResult.claims;

    if (claims && claims.role) {
      return claims;
    }

    await new Promise((resolve) => setTimeout(resolve, POLLING_INTERVAL_MS));
  }

  return null;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [claims, setClaims] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authClient, async (firebaseUser) => {
      if (firebaseUser) {
        const customClaims = await fetchClaimsWithPolling(firebaseUser);
        setUser(firebaseUser);
        setClaims(customClaims);
      } else {
        setUser(null);
        setClaims(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, claims, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
