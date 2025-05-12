"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type TooltipButtonProps = {
  label: string;
  onClick?: () => void;
  icon: ReactNode;
  variant?: "ghost" | "default" | "outline";
  size?: "icon" | "sm" | "lg";
  className?: string;
};

export function TooltipButton({
  label,
  onClick,
  icon,
  variant = "ghost",
  size = "icon",
  className = "",
}: TooltipButtonProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size={size}
            onClick={onClick}
            className={className}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
