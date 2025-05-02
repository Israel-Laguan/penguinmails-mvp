"use client"; // This component uses client-side state (useState)

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link"; // Import Link
import { useSearchParams } from "next/navigation"; // To read query params like ?plan=business
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, UserPlus, Building, KeyRound } from "lucide-react"; // Icons
import { LandingLayout } from "@/components/layout/landing";
import { signupContent } from "./content";

// Separate component for handling search params
function SearchParamsProvider({ children }: { 
  children: (props: { selectedPlan: string | null }) => React.ReactNode 
}) {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");
  return children({ selectedPlan });
}

export default function SignUpPage() {
  return (
    <LandingLayout>
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <Suspense fallback={null}>
          <SearchParamsProvider>
            {({ selectedPlan }) => (
              <SignUpForm selectedPlan={selectedPlan} />
            )}
          </SearchParamsProvider>
        </Suspense>
      </div>
    </LandingLayout>
  );
}

function SignUpForm({ selectedPlan }: { selectedPlan: string | null }) {
  const [signupType, setSignupType] = useState<"new" | "existing">("new");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [referralCode, setReferralCode] = useState("");

  // Redirect to pricing if trying to sign up for 'new' without a plan selected
  useEffect(() => {
    if (signupType === "new" && !selectedPlan) {
      setError(signupContent.alerts.error.selectPlan);
    } else {
      setError(null); // Clear error if plan is selected or type changes
    }
  }, [signupType, selectedPlan]);

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    // Basic validation
    if (password !== confirmPassword) {
      setError(signupContent.alerts.error.passwordMismatch);
      setIsLoading(false);
      return;
    }
    if (signupType === "new" && !selectedPlan) {
      setError(signupContent.alerts.error.noPlan);
      setIsLoading(false);
      return;
    }
    if (signupType === "existing" && (!businessId || !referralCode)) {
      setError(signupContent.alerts.error.missingBusinessInfo);
      setIsLoading(false);
      return;
    }

    // --- Placeholder for actual signup logic ---
    console.log("Signup attempt:", {
      type: signupType,
      email,
      // Don't log password in real apps
      plan: signupType === "new" ? selectedPlan : undefined,
      businessId: signupType === "existing" ? businessId : undefined,
      referralCode: signupType === "existing" ? referralCode : undefined,
    });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // On success, you would typically redirect the user
      // e.g., to a verification page or the dashboard
      console.log("Signup successful (simulated)");
      // router.push('/dashboard'); // Example redirect
      alert(
        "Sign up successful! (Simulated) Check console for details. You would be redirected now."
      );
    } catch (err) {
      console.error("Signup failed (simulated):", err);
      setError(signupContent.alerts.error.generic); // Show a generic error
    } finally {
      setIsLoading(false);
    }
    // --- End placeholder ---
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">
          {signupContent.header.title}
        </CardTitle>
        <CardDescription>
          {signupContent.header.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Choose Signup Type */}
        <div>
          <Label>
            {signupContent.form.typeLabel}
          </Label>
          <RadioGroup
            defaultValue="new"
            className="grid grid-cols-2 gap-4 mt-2"
            value={signupType}
            onValueChange={(value: "new" | "existing") =>
              setSignupType(value)
            }
          >
            <div>
              <RadioGroupItem
                value="new"
                id="new"
                className="peer sr-only"
              />
              <Label
                htmlFor="new"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer" // Added cursor-pointer
              >
                <UserPlus className="mb-3 h-6 w-6" />
                {signupContent.form.options.new}
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="existing"
                id="existing"
                className="peer sr-only"
              />
              <Label
                htmlFor="existing"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer" // Added cursor-pointer
              >
                <Building className="mb-3 h-6 w-6" />
                {signupContent.form.options.existing}
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Conditional Form Fields */}
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Common Fields */}
          <div className="space-y-2">
            <Label htmlFor="email">{signupContent.form.labels.email}</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{signupContent.form.labels.password}</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">{signupContent.form.labels.confirmPassword}</Label>
            <Input
              id="confirm-password"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {/* Fields for Joining Existing Business */}
          {signupType === "existing" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="businessId">{signupContent.form.labels.businessId}</Label>
                <Input
                  id="businessId"
                  placeholder="Enter the ID provided by your team"
                  required
                  value={businessId}
                  onChange={(e) => setBusinessId(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="referralCode">{signupContent.form.labels.referralCode}</Label>
                <Input
                  id="referralCode"
                  placeholder="Enter the code provided by your team"
                  required
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <Alert variant="default" className="mt-4">
                <Building className="h-4 w-4" />
                <AlertTitle>{signupContent.alerts.joining.title}</AlertTitle>
                <AlertDescription>
                  {signupContent.alerts.joining.description}
                </AlertDescription>
              </Alert>
            </>
          )}

          {/* Info for Creating New Account */}
          {signupType === "new" && selectedPlan && (
            <Alert variant="default" className="mt-4">
              <KeyRound className="h-4 w-4" />
              <AlertTitle>{signupContent.alerts.newAccount.title}</AlertTitle>
              <AlertDescription>
                {signupContent.alerts.newAccount.description.replace(
                  "{plan}",
                  selectedPlan
                )}
              </AlertDescription>
            </Alert>
          )}
          {signupType === "new" && !selectedPlan && (
            <Alert variant="destructive" className="mt-4">
              <Terminal className="h-4 w-4" />
              <AlertTitle>{signupContent.alerts.planRequired.title}</AlertTitle>
              <AlertDescription>
                {signupContent.alerts.planRequired.description} {/* Use Link */}
                <Link href="/pricing" className="font-bold underline">
                  {signupContent.alerts.planRequired.title}
                </Link>{" "}
                {signupContent.alerts.planRequired.description}
              </AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {error && (
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>{signupContent.alerts.error.title}</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || (signupType === "new" && !selectedPlan)}
          >
            {isLoading
              ? signupContent.buttons.signingUp
              : signupType === "new"
              ? signupContent.buttons.createAccount
              : signupContent.buttons.joinBusiness}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-2">
        <p className="text-xs text-muted-foreground">
          {signupContent.footer.haveAccount} {/* Use Link */}
          <Link
            href="/login"
            className="underline font-medium text-primary"
          >
            {signupContent.footer.login}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
