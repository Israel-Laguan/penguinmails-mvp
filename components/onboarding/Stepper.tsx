"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useOnboarding } from "@/context/onboarding-context";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { Fragment } from "react";
import { OnboardingStep } from "./types";

interface StepIndicatorProps {
  step: OnboardingStep;
  isActive: boolean;
  isAccessible: boolean;
  onClick: () => void;
}

function StepIndicator({
  step,
  isActive,
  isAccessible,
  onClick,
}: StepIndicatorProps) {
  const IconComponent = step.icon;

  return (
    <Button
      onClick={onClick}
      disabled={!isAccessible}
      size="icon"
      variant={step.completed ? "default" : isActive ? "default" : "outline"}
      className={cn(
        "h-12 w-12 rounded-xl transition-all",
        step.completed && "bg-green-500 hover:bg-green-600 text-white",
        isActive && !step.completed && cn(step.color, "text-white"),
        !isAccessible && "opacity-50 cursor-not-allowed"
      )}
      aria-label={`Step ${step.id}: ${step.title}`}
    >
      {step.completed ? (
        <CheckCircle className="h-6 w-6" />
      ) : (
        <IconComponent className="h-6 w-6" />
      )}
    </Button>
  );
}

export function Stepper() {
  const { currentStep, totalSteps, steps, setCurrentStep, isStepAccessible } =
    useOnboarding();

  if (steps.length === 0) return null;

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-semibold">Setup Progress</CardTitle>
        <Badge variant="secondary" className="text-sm font-medium">
          Step {currentStep} of {totalSteps}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <Fragment key={step.id}>
              <StepIndicator
                step={step}
                isActive={currentStep === step.id}
                isAccessible={isStepAccessible(step.id)}
                onClick={() =>
                  isStepAccessible(step.id) && setCurrentStep(step.id)
                }
              />
              {index < totalSteps - 1 && (
                <Separator
                  orientation="horizontal"
                  className={cn(
                    "flex-1 mx-2 h-1 rounded-full transition-all",
                    step.completed ? "bg-green-500" : "bg-muted"
                  )}
                />
              )}
            </Fragment>
          ))}
        </div>
        <Progress
          value={(currentStep / totalSteps) * 100}
          className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-green-500 [&>div]:rounded-full [&>div]:transition-all [&>div]:duration-500"
        />
      </CardContent>
    </Card>
  );
}
