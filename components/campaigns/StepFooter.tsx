"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

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
  return (
    <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-2">
      <Button variant="outline" size="sm" onClick={onAddEmail} className="gap-1">
        <Plus className="h-4 w-4" />
        Add Email
      </Button>
      <Button variant="outline" size="sm" onClick={onAddDelay} className="gap-1">
        <Plus className="h-4 w-4" />
        Add Delay
      </Button>
    </div>
  );
}

