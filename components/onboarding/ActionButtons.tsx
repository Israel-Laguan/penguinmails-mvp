"use client";
import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/context/onboarding-context";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";
import { OnboardingStep } from "./types";

interface ActionButtonsProps {
  step: OnboardingStep;
}

export function ActionButtons({ step }: ActionButtonsProps) {
  const { markStepCompleted } = useOnboarding();

  const handleStepAction = useCallback(() => {
    if (!step.completed) {
      markStepCompleted(step.id);
    }
    console.log("Step action clicked:", step.title);
  }, [step.completed, step.id, step.title, markStepCompleted]);

  const handleKnowledgeBase = useCallback(() => {
    console.log("Knowledge base clicked:", step.kbLink);
  }, [step.kbLink]);

  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <Button
        onClick={handleStepAction}
        disabled={step.completed}
        className="min-w-fit"
        asChild
      >
        <Link href={step.href}>
          <span>{step.buttonText}</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>

      <Button variant={"outline"} onClick={handleKnowledgeBase}>
        <BookOpen className="mr-2 h-5 w-5" />
        <span>{step.kbLink}</span>
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
