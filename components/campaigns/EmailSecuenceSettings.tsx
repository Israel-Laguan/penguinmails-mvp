"use client";

import React from "react";
import { Button } from "../ui/button";
import { copyText as t } from "./copy";
import { EmailSecuenceSettingsProps } from "./types";
import { FileText } from "lucide-react";
import { SequenceStep } from "./SequenceStep";

export function EmailSecuenceSettings({ steps, templates, emailBodyRef, currentEditingStep, actions, stepErrors }: EmailSecuenceSettingsProps) {
  const {
    handleAddEmailStep,
    ...restStepActions
  } = actions;
  console.log({ stepErrors })

  return (
    <>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <SequenceStep
            key={index} // Consider using a more stable key if steps can be reordered significantly
            step={step}
            index={index}
            totalSteps={steps.length}
            currentEditingStep={currentEditingStep}
            emailBodyRef={emailBodyRef}
            templates={templates}
            actions={restStepActions}
          />
        ))}
        <div className="flex items-center justify-center gap-2 pt-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleAddEmailStep(steps.length - 1)}
          >
            <FileText className="w-4 h-4 mr-2" />
            {t.addEmail}
          </Button>
        </div>
      </div>
      {stepErrors?.message && (
        <p className="text-sm font-medium text-destructive mt-2">
          {stepErrors.message}
        </p>
      )}
      {stepErrors?.root?.message && (
        <p className="text-sm font-medium text-destructive mt-2">
          {stepErrors.root.message}
        </p>
      )}
    </>
  );
}
