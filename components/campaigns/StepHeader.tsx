"use client";

import React, { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Clock, Trash2, ArrowUp, ArrowDown } from "lucide-react";
import { copyText as t } from "./copy";

interface StepHeaderProps {
  stepIndex: number;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  isFirst: boolean;
  isLast: boolean;
  canRemove: boolean;
}

export function StepHeader({
  stepIndex,
  onMoveUp,
  onMoveDown,
  onRemove,
  isFirst,
  isLast,
  canRemove
}: StepHeaderProps) {

  const handleAction = (evt: MouseEvent<HTMLButtonElement>, handleAction: () => void) => {
    evt.preventDefault()
    handleAction();
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        {stepIndex > 0 && (
          <div className="h-6 border-l-2 border-dashed border-gray-300 dark:border-gray-700" />
        )}
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={(evt) => handleAction(evt, onMoveUp)}
          disabled={isFirst}
          className="h-8 w-8 disabled:opacity-30"
        >
          <ArrowUp className="h-4 w-4" />
          <span className="sr-only">{t.buttons.moveStepUp}</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={(evt) => handleAction(evt, onMoveDown)}
          disabled={isLast}
          className="h-8 w-8 disabled:opacity-30"
        >
          <ArrowDown className="h-4 w-4" />
          <span className="sr-only">{t.buttons.moveStepDown}</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={(evt) => handleAction(evt, onRemove)}
          disabled={!canRemove}
          className="h-8 w-8 text-destructive hover:text-destructive disabled:opacity-30"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">{t.buttons.removeStep}</span>
        </Button>
      </div>
    </div>
  );
}

