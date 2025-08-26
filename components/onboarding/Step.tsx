"use client";

import { ActionButtons } from "./ActionButtons";
import { PromotionAlert } from "./PromotionAlert";
import { OnboardingStep } from "./types";
import { VideoTutorial } from "./VideoTutorial";

interface StepProps {
  step: OnboardingStep;
}

export function Step({ step }: StepProps) {
  return (
    <div className="space-y-8">
      <p className="text-lg leading-relaxed text-muted-foreground">
        {step.explanation}
      </p>
      <VideoTutorial stepTitle={step.title} />
      <ActionButtons step={step} />
      {step.promotion && <PromotionAlert promotion={step.promotion} />}
    </div>
  );
}
