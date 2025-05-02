"use client";

import React, { RefObject } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { EmailStep } from "@/components/campaigns/EmailStep";
import { DelayStep } from "@/components/campaigns/DelayStep";
import { StepHeader } from "@/components/campaigns/StepHeader";
import { StepFooter } from "@/components/campaigns/StepFooter";

type EmailStepType = {
  emailSubject?: string;
  emailBody?: string;
  delayDays?: number;
  delayHours?: number;
  condition?: "always" | "if_not_opened" | "if_not_clicked" | "if_not_replied";
  type: "email" | "delay";
};

interface SequenceStepProps {
  step: EmailStepType;
  index: number;
  totalSteps: number;
  currentEditingStep: number | null;
  emailBodyRef: RefObject<HTMLTextAreaElement>;
  onMoveStepUp: (index: number) => void;
  onMoveStepDown: (index: number) => void;
  onRemoveStep: (index: number) => void;
  onAddEmailStep: (index: number) => void;
  onAddDelayStep: (index: number) => void;
  onUpdateStep: (index: number, updates: EmailStepType) => void;
  onInsertTag: (index: number, tag: string) => void;
  onSetCurrentEditingStep: (index: number | null) => void;
  onImportTemplate: (index: number, subject: string, body: string) => void;
}

export function SequenceStep({
  step,
  index,
  totalSteps,
  currentEditingStep,
  emailBodyRef,
  onMoveStepUp,
  onMoveStepDown,
  onRemoveStep,
  onAddEmailStep,
  onAddDelayStep,
  onUpdateStep,
  onInsertTag,
  onSetCurrentEditingStep,
  onImportTemplate
}: SequenceStepProps) {
  const isEditing = currentEditingStep === index;

  const handleSubjectChange = (value: string) => {
    onUpdateStep(index, { ...step, emailSubject: value });
  };

  const handleBodyChange = (value: string) => {
    onUpdateStep(index, { ...step, emailBody: value });
    onSetCurrentEditingStep(index);
  };

  const handleDaysChange = (value: number) => {
    onUpdateStep(index, { ...step, delayDays: value });
  };

  const handleHoursChange = (value: number) => {
    onUpdateStep(index, { ...step, delayHours: value });
  };

  const handleConditionChange = (value: "always" | "if_not_opened" | "if_not_clicked" | "if_not_replied") => {
    onUpdateStep(index, { ...step, condition: value });
  };

  const handleImportTemplate = (subject: string, body: string) => {
    onImportTemplate(index, subject, body);
  };

  return (
    <div className="relative">
      {index > 0 && (
        <div className="absolute left-6 top-[-24px] h-6 border-l-2 border-dashed border-gray-300 dark:border-gray-700" />
      )}
      {index < totalSteps - 1 && (
        <div className="absolute left-6 top-[100%] h-6 border-l-2 border-dashed border-gray-300 dark:border-gray-700" />
      )}

      <Card className={step.type === "email" ? "border-primary/50" : "border-border"}>
        <CardContent className="pt-6">
          <StepHeader
            stepType={step.type}
            stepIndex={index}
            stepCondition={step.condition}
            onMoveUp={() => onMoveStepUp(index)}
            onMoveDown={() => onMoveStepDown(index)}
            onRemove={() => onRemoveStep(index)}
            isFirst={index === 0}
            isLast={index === totalSteps - 1}
            canRemove={!(totalSteps === 1 && index === 0)}
          />

          {step.type === "email" ? (
            <EmailStep
              index={index}
              step={step}
              onSubjectChange={handleSubjectChange}
              onBodyChange={handleBodyChange}
              onImportTemplate={handleImportTemplate}
              onInsertTag={(tag) => onInsertTag(index, tag)}
              isEditing={isEditing}
              emailBodyRef={emailBodyRef}
            />
          ) : (
            <DelayStep
              index={index}
              step={step}
              onDaysChange={handleDaysChange}
              onHoursChange={handleHoursChange}
              onConditionChange={handleConditionChange}
            />
          )}

          <StepFooter
            stepType={step.type}
            isLastStep={index === totalSteps - 1}
            onAddDelay={() => onAddDelayStep(index)}
            onAddEmail={() => onAddEmailStep(index)}
          />
        </CardContent>
      </Card>
    </div>
  );
}

