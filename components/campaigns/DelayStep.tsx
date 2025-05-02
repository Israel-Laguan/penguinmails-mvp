"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { copyText as t } from "./copy";

type EmailStepType = {
  emailSubject?: string;
  emailBody?: string;
  delayDays?: number;
  delayHours?: number;
  condition?: "always" | "if_not_opened" | "if_not_clicked" | "if_not_replied";
  type: "email" | "delay";
};

interface DelayStepProps {
  index: number;
  step: EmailStepType;
  onDaysChange: (value: number) => void;
  onHoursChange: (value: number) => void;
  onConditionChange: (value: "always" | "if_not_opened" | "if_not_clicked" | "if_not_replied") => void;
}

const conditionOptions = [
  { value: "always", label: t.delay.conditions.always },
  { value: "if_not_opened", label: t.delay.conditions.notOpened },
  { value: "if_not_clicked", label: t.delay.conditions.notClicked },
  { value: "if_not_replied", label: t.delay.conditions.notReplied },
];

export function DelayStep({
  index,
  step,
  onDaysChange,
  onHoursChange,
  onConditionChange
}: DelayStepProps) {
  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`delay-days-${index}`}>{t.delay.waitFor}</Label>
          <div className="flex items-center gap-2">
            <Input
              id={`delay-days-${index}`}
              type="number"
              min="0"
              value={step.delayDays}
              onChange={(e) => onDaysChange(parseInt(e.target.value, 10) || 0)}
              className="w-20"
            />
            <span>{t.delay.days}</span>
            <Input
              id={`delay-hours-${index}`}
              type="number"
              min="0"
              max="23"
              value={step.delayHours}
              onChange={(e) => onHoursChange(parseInt(e.target.value, 10) || 0)}
              className="w-20"
            />
            <span>{t.delay.hours}</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`condition-${index}`}>{t.delay.condition}</Label>
          <Select onValueChange={onConditionChange} defaultValue={step.condition}>
            <SelectTrigger id={`condition-${index}`}>
              <SelectValue placeholder={t.delay.selectCondition} />
            </SelectTrigger>
            <SelectContent>
              {conditionOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

