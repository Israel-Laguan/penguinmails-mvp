"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const PlanType = {
  FREE: "FREE",
  STARTER: "STARTER",
  PRO: "PRO",
} as const;

type PlanType = keyof typeof PlanType;

type PlanSelectProps = {
  setSelectedPlan: (plan: PlanType) => void;
};

export function PlanSelect({ setSelectedPlan }: PlanSelectProps) {
  const [plan, setPlan] = useState<PlanType>("FREE");

  const handleChange = (value: string) => {
    const selected = value as PlanType;
    setPlan(selected);
    setSelectedPlan(selected);
  };

  return (
    <ToggleGroup
      type="single"
      value={plan}
      onValueChange={(value) => {
        if (value) handleChange(value);
      }}
      className="flex space-x-2"
    >
      {Object.values(PlanType).map((type) => (
        <ToggleGroupItem
          key={type}
          value={type}
          aria-label={`Select plan ${type}`}
          className="capitalize"
        >
          {type}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
