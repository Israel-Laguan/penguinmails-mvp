"use client";

import React, { RefObject } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TemplateSelector } from "./TemplateSelector";
import PersonalizationTags from "@/components/email/PersonalizationTags";
import { copyText as t } from "./copy";

type EmailStepType = {
  emailSubject?: string;
  emailBody?: string;
}

interface EmailStepProps {
  index: number;
  step: EmailStepType;
  onSubjectChange: (value: string) => void;
  onBodyChange: (value: string) => void;
  onImportTemplate: (subject: string, body: string) => void;
  onInsertTag: (tag: string) => void;
  isEditing: boolean;
  emailBodyRef: RefObject<HTMLTextAreaElement>;
}

export function EmailStep({
  index,
  step,
  onSubjectChange,
  onBodyChange,
  onImportTemplate,
  onInsertTag,
  isEditing,
  emailBodyRef
}: EmailStepProps) {
  return (
    <div className="space-y-4 mt-4">
      <div className="flex justify-between items-center">
        <label htmlFor={`subject-${index}`} className="text-sm font-medium">{t.emailStep.subject.label}</label>
        <TemplateSelector onSelectTemplate={onImportTemplate} />
      </div>
      <Input
        id={`subject-${index}`}
        placeholder={t.emailStep.subject.placeholder}
        value={step.emailSubject}
        onChange={(e) => onSubjectChange(e.target.value)}
      />

      <div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor={`body-${index}`} className="text-sm font-medium">{t.emailStep.body.label}</label>
          <PersonalizationTags onInsertTag={onInsertTag} />
        </div>
        <Textarea
          id={`body-${index}`}
          ref={emailBodyRef}
          placeholder={t.emailStep.body.placeholder}
          value={step.emailBody}
          onChange={(e) => onBodyChange(e.target.value)}
          rows={isEditing ? 10 : 5}
          className="min-h-[120px] resize-y"
        />
      </div>
    </div>
  );
}

