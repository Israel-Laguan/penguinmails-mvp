"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, LogIn } from "lucide-react";
import { LandingLayout } from "@/components/layout/landing";
import { loginContent } from "./content";
import { getIdToken, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithFirebase } from "@/actions/auth/singin";
import { authClient } from "@/lib/firebase/firebase-client";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
  
    try {
      const userCredential = await signInWithEmailAndPassword(authClient, email, password);
      const user = userCredential.user;

      signInWithFirebase(user?.uid)
  
       // force refresh claims
      await user.getIdToken(true);
  
      // Token claims
      const tokenResult = await user.getIdTokenResult();

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err?.message || "Error al iniciar sesión");
    }
  };

  return (
    <LandingLayout>
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <LogIn className="mx-auto h-8 w-8 mb-2 text-primary" />
            <CardTitle className="text-2xl">{loginContent.title}</CardTitle>
            <CardDescription>{loginContent.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{loginContent.email.label}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={loginContent.email.placeholder}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">{loginContent.password.label}</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    {loginContent.forgotPassword}
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              {/* Error Message */}
              {error && (
                <Alert variant="destructive">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>{loginContent.errors.title}</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? loginContent.loginButton.loading : loginContent.loginButton.default}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2">
            <p className="text-xs text-muted-foreground">
              {loginContent.signup.text}{" "}
              <Link
                href="/signup"
                className="underline font-medium text-primary"
              >
                {loginContent.signup.link}
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </LandingLayout>
  );
}
