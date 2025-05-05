"use client";

import React, { RefObject } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { EmailStep } from "@/components/campaigns/EmailStep";
import { DelayStep } from "@/components/campaigns/DelayStep";
import { StepHeader } from "@/components/campaigns/StepHeader";
import { StepFooter } from "@/components/campaigns/StepFooter";
import { CampaignEventContition, Template } from "@/app/api/generated/prisma";
import { DelaySettings } from "./DelaySettings";

interface SequenceStepProps {
  step: {
    id?: number;
    sequenceOrder: number;
    delayDays: number;
    delayHours: number;
    emailSubject: string;
    emailBody?: string;
    templateId?: number;
    campaignId: number;
    condition: CampaignEventContition;
    createdAt?: Date;
    updatedAt?: Date;
  };
  templates?: Template[];
  index: number;
  totalSteps: number;
  currentEditingStep: number | null;
  emailBodyRef: RefObject<HTMLTextAreaElement>;
  onMoveStepUp: (index: number) => void;
  onMoveStepDown: (index: number) => void;
  onRemoveStep: (index: number) => void;
  onUpdateStep: (index: number, updates: Partial<SequenceStepProps["step"]>) => void;
  onInsertTag: (index: number, tag: string) => void;
  onSetCurrentEditingStep: (index: number | null) => void;
  onSelectTemplate: (index: number, templateId: number) => void;
}

export function SequenceStep({
  step,
  templates,
  index,
  totalSteps,
  currentEditingStep,
  emailBodyRef,
  onMoveStepUp,
  onMoveStepDown,
  onRemoveStep,
  onUpdateStep,
  onInsertTag,
  onSelectTemplate
}: SequenceStepProps) {
  const selectedTemplate = templates?.find(t => t.id === step.templateId);

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

