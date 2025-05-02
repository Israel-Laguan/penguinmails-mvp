"use client";

import React, { RefObject } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TemplateSelector } from "./TemplateSelector";
import PersonalizationTags from "@/components/email/PersonalizationTags";

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
        <label htmlFor={`subject-${index}`} className="text-sm font-medium">Subject</label>
        <TemplateSelector onSelectTemplate={onImportTemplate} />
      </div>
      <Input
        id={`subject-${index}`}
        placeholder="Enter email subject"
        value={step.emailSubject}
        onChange={(e) => onSubjectChange(e.target.value)}
      />

      <div>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor={`body-${index}`} className="text-sm font-medium">Body</label>
          <PersonalizationTags onInsertTag={onInsertTag} />
        </div>
        <Textarea
          id={`body-${index}`}
          ref={emailBodyRef} // Attach ref here
          placeholder="Write your email content here... Use {{variable}} for personalization."
          value={step.emailBody}
          onChange={(e) => onBodyChange(e.target.value)}
          rows={isEditing ? 10 : 5} // Expand when editing
          className="min-h-[120px] resize-y"
        />
      </div>
    </div>
  );
}

