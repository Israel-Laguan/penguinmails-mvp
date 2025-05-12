"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { EmailStep } from "@/components/campaigns/EmailStep";
import { DelayStep } from "@/components/campaigns/DelayStep";
import { StepHeader } from "@/components/campaigns/StepHeader";
import { StepFooter } from "@/components/campaigns/StepFooter";
import { DelaySettings } from "./DelaySettings";
import { SequenceStepProps } from "./types";

export function SequenceStep({
  step,
  templates,
  index,
  totalSteps,
  currentEditingStep,
  emailBodyRef,
  actions
}: SequenceStepProps) {
  const selectedTemplate = templates?.find(t => t.id === step.templateId);
  const { onMoveStepUp, onMoveStepDown, onRemoveStep, onUpdateStep, onInsertTag, onSelectTemplate } = actions;

  return (
    <div className="relative group">
      {index === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-4 border-l-2 border-dashed border-green-300 dark:border-gree-700">
          Add your first email
        </div>
      )}
      {index > 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-4 border-l-2 border-dashed border-gray-300 dark:border-gray-700">
          Add another email!
        </div>
      )}
      {index < totalSteps - 1 && (
        <div className="absolute top-[100%] h-6 border-l-2 border-dashed border-gray-300 dark:border-gray-700" />
      )}

      <Card className="border-primary/50 transition-transform duration-200 hover:-translate-y-1">
        <CardContent className="pt-6">
          <StepHeader
            stepIndex={index}
            onMoveUp={() => onMoveStepUp(index)}
            onMoveDown={() => onMoveStepDown(index)}
            onRemove={() => onRemoveStep(index)}
            isFirst={index === 0}
            isLast={index === totalSteps - 1}
            canRemove={totalSteps > 1}
          />

          <div className="space-y-4">
            <EmailStep
              index={index}
              template={selectedTemplate}
              step={step}
              onSubjectChange={(value) => onUpdateStep(index, { emailSubject: value })}
              onBodyChange={(value) => onUpdateStep(index, { emailBody: value })}
              onSelectTemplate={(subject, body) => {
                onUpdateStep(index, { emailSubject: subject, emailBody: body });
                onSelectTemplate(index, selectedTemplate?.id || 0);
              }}
              onInsertTag={(tag) => onInsertTag(index, tag)}
              isEditing={currentEditingStep === index}
              emailBodyRef={emailBodyRef}
            />

            <DelaySettings
              delayDays={step.delayDays}
              delayHours={step.delayHours}
              condition={step.condition}
              onUpdate={(updates) => onUpdateStep(index, updates)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

