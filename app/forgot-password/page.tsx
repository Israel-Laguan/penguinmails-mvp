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
import { Terminal, KeyRound, MailCheck } from "lucide-react"; // Icons
import { LandingLayout } from "@/components/layout/landing";
import { forgotPasswordContent } from "./content";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePasswordResetRequest = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSubmitted(false);

    // --- Placeholder for actual password reset request logic ---
    console.log("Password reset request for:", email);

    try {
      // Simulate API call to your backend to send reset link
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          // Simulate success/failure (e.g., check if email exists)
          if (email.includes("@")) {
            // Basic check
            resolve("Success");
          } else {
            reject(new Error("Invalid email format"));
          }
        }, 1500)
      );

      console.log("Password reset request successful (simulated)");
      setIsSubmitted(true); // Show success message
    } catch (err) {
      console.error("Password reset request failed (simulated):", err);
      setError(err instanceof Error ? err.message : "Failed to send reset link. Please try again.");
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
            <KeyRound className="mx-auto h-8 w-8 mb-2 text-primary" />
            <CardTitle className="text-2xl">{forgotPasswordContent.title}</CardTitle>
            <CardDescription>
              {isSubmitted
                ? forgotPasswordContent.description.success
                : forgotPasswordContent.description.initial}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isSubmitted ? (
              <form onSubmit={handlePasswordResetRequest} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{forgotPasswordContent.form.email.label}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={forgotPasswordContent.form.email.placeholder}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>{forgotPasswordContent.alerts.error.title}</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? forgotPasswordContent.form.button.sending : forgotPasswordContent.form.button.send}
                </Button>
              </form>
            ) : (
              <Alert>
                {" "}
                {/* Ensure you have a 'success' variant defined */}
                <MailCheck className="h-4 w-4" />
                <AlertTitle>{forgotPasswordContent.alerts.success.title}</AlertTitle>
                <AlertDescription>
                  {forgotPasswordContent.alerts.success.description(email)}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2">
            <p className="text-xs text-muted-foreground">
              {forgotPasswordContent.footer.text}{" "}
              <Link
                href="/login"
                className="underline font-medium text-primary"
              >
                {forgotPasswordContent.footer.linkText}
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </LandingLayout>
  );
}
