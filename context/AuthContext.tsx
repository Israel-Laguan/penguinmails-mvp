"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getIdTokenResult, User } from "firebase/auth";
import { authClient } from "@/lib/firebase/firebase-client";


type AuthContextType = {
  user: User | null;
  claims: any;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  claims: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [claims, setClaims] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authClient, async (firebaseUser) => {
      if (firebaseUser) {
        const tokenResult = await getIdTokenResult(firebaseUser, true);
        setUser(firebaseUser);
        setClaims(tokenResult.claims);
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
