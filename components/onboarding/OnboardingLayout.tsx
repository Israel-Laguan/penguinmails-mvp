"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useOnboarding } from "@/context/onboarding-context";
import { HelpSection } from "./HelpSection";
import { StepCard } from "./StepCard";
import { Stepper } from "./Stepper";

export function OnboardingLayout() {
  const { currentStepData } = useOnboarding();

  if (!currentStepData) {
    return (
      <div className="flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">
              No onboarding steps available
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Stepper />
      <StepCard />
      <HelpSection />
    </div>
  );
}
