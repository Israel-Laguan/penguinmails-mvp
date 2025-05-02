"use client"; // Uses client state

import React, { useState } from "react";
import Link from "next/link"; // Import Link
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
import { Terminal, LogIn } from "lucide-react"; // Icons
import { LandingLayout } from "@/components/layout/landing";
import { loginContent } from "./content";
// import { useAuth } from '@/hooks/useAuth'; // Import your actual auth hook if login logic resides there

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // const { login } = useAuth(); // Get login function from your auth context/hook if needed

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    // --- Placeholder for actual login logic ---
    console.log("Login attempt:", { email /* Don't log password */ });

    try {
      // Simulate API call to your backend
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          // Simulate success/failure
          if (email === "test@email.com" && password === "Test#1234") {
            // Example credentials
            resolve("Success");
            // In a real app, you'd get a token/session, update auth state
            // login(); // Call your auth hook's login function
          } else if (email === "test@email.com") {
            reject(new Error(loginContent.errors.incorrectPassword));
          } else {
            reject(new Error(loginContent.errors.userNotFound));
          }
        }, 1500)
      );

      console.log("Login successful (simulated)");
      // Redirect on success (e.g., to dashboard)
      // router.push('/dashboard'); // Use Next.js router
      alert(
        "Login successful! (Simulated) You would be redirected to the dashboard."
      );
    } catch (err) {
      console.error("Login failed (simulated):", err);
      setError(err instanceof Error ? err.message : loginContent.errors.generic);
    } finally {
      setIsLoading(false);
    }
    // --- End placeholder ---
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
