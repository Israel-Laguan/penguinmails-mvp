"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { copyText as t } from "./copy";

interface StepFooterProps {
  stepType: "email" | "delay";
  isLastStep: boolean;
  onAddDelay: () => void;
  onAddEmail: () => void;
}

export function StepFooter({
  stepType,
  isLastStep,
  onAddDelay,
  onAddEmail
}: StepFooterProps) {
  if (!isLastStep) return null;

  return (
    <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-2">
      {stepType === "delay" && (
        <Button variant="outline" size="sm" onClick={onAddEmail} className="gap-1">
          <Plus className="h-4 w-4" />
          {t.addEmail}
        </Button>
      )}
      {stepType === "email" && (
        <Button variant="outline" size="sm" onClick={onAddDelay} className="gap-1">
          <Plus className="h-4 w-4" />
          {t.addDelay}
        </Button>
      )}
    </div>
  );
}

