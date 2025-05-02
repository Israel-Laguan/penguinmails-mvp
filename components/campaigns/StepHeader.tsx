"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Clock, Trash2, ArrowUp, ArrowDown } from "lucide-react";

interface StepHeaderProps {
  stepType: "email" | "delay";
  stepIndex: number;
  stepCondition?: string;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  isFirst: boolean;
  isLast: boolean;
  canRemove: boolean;
}

export function StepHeader({
  stepType,
  stepIndex,
  stepCondition,
  onMoveUp,
  onMoveDown,
  onRemove,
  isFirst,
  isLast,
  canRemove
}: StepHeaderProps) {
  const getConditionText = (condition: string | undefined) => {
    switch (condition) {
      case "if_not_opened": return "if not opened";
      case "if_not_clicked": return "if not clicked";
      case "if_not_replied": return "if not replied";
      default: return "";
    }
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${stepType === "email" ? "bg-blue-100 dark:bg-blue-900" : "bg-gray-100 dark:bg-gray-800"}`}>
          {stepType === "email" ? (
            <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          ) : (
            <Clock className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          )}
        </div>
        <span className="font-medium text-gray-900 dark:text-gray-100">
          Step {stepIndex + 1}: {stepType === "email" ? "Email" : "Delay"}
        </span>
        {stepType === "delay" && stepCondition && stepCondition !== "always" && (
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({getConditionText(stepCondition)})</span>
        )}
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMoveUp}
          disabled={isFirst}
          className="h-8 w-8 disabled:opacity-30"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="sr-only">Move step up</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onMoveDown}
          disabled={isLast}
          className="h-8 w-8 disabled:opacity-30"
        >
          <ArrowDown className="h-4 w-4" />
          <span className="sr-only">Move step down</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onRemove}
          disabled={!canRemove}
          className="h-8 w-8 text-destructive hover:text-destructive disabled:opacity-30"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Remove step</span>
        </Button>
      </div>
    </div>
  );
}

