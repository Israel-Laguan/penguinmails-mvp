"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useOnboarding } from "@/context/onboarding-context";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { NavigationButtons } from "./NavigationButtons";
import { Step } from "./Step";
import { OnboardingStep } from "./types";

interface StepHeaderProps {
  step: OnboardingStep;
}

function StepHeader({ step }: StepHeaderProps) {
  const IconComponent = step.icon;

  return (
    <CardHeader className="border-b bg-gradient-to-r from-muted/50 to-blue-50 p-8">
      <div className="flex items-center space-x-4">
        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-2xl",
            step.completed ? "bg-green-500" : step.color
          )}
        >
          {step.completed ? (
            <CheckCircle className="h-8 w-8 text-white" />
          ) : (
            <IconComponent className="h-8 w-8 text-white" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
            {step.completed && (
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                ✅ Completed
              </Badge>
            )}
          </div>
          <p className="text-lg text-muted-foreground">{step.subtitle}</p>
        </div>
      </div>
    </CardHeader>
  );
}

export function StepCard() {
  const { currentStepData } = useOnboarding();

  if (!currentStepData) return null;

  return (
    <Card className="w-full p-0">
      <StepHeader step={currentStepData} />
      <CardContent className="p-8">
        <Step step={currentStepData} />
      </CardContent>
      <CardFooter className="border-t bg-muted/30 p-8">
        <NavigationButtons />
      </CardFooter>
    </Card>
  );
}
