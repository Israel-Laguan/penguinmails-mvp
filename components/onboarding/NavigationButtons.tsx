"use client";
import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/context/onboarding-context";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useCallback } from "react";

export function NavigationButtons() {
  const { currentStep, steps, goToNextStep, goToPreviousStep } =
    useOnboarding();

  const handleSkipSetup = useCallback(() => {
    console.log("Skip setup clicked");
  }, []);

  const handleCompleteSetup = useCallback(() => {
    console.log("Complete setup clicked");
  }, []);

  return (
    <div className="flex items-center justify-between w-full">
      <Button
        variant="ghost"
        onClick={goToPreviousStep}
        disabled={currentStep === 1}
        className="font-medium"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Previous
      </Button>

      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          onClick={handleSkipSetup}
          className="font-medium"
        >
          Skip Setup
        </Button>

        {currentStep < steps.length ? (
          <Button onClick={goToNextStep} className="shadow-sm">
            Continue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        ) : (
          <Button
            onClick={handleCompleteSetup}
            className="bg-green-600 hover:bg-green-700 shadow-sm"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Complete Setup
          </Button>
        )}
      </div>
    </div>
  );
}
