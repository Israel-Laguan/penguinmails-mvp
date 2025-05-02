"use client";

import React from "react";
import { copyText as t } from "./copy";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface TemplateSelectorProps {
  onSelectTemplate: (subject: string, body: string) => void;
}

// TODO: Fetch templates dynamically
const templates = t.templates.items.map((item, index) => ({
  id: index + 1,
  ...item
}));

export function TemplateSelector({ onSelectTemplate }: TemplateSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1">
          <FileText className="h-4 w-4" />
          {t.templates.buttonLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t.templates.dropdownLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {templates.map((template) => (
          <DropdownMenuItem
            key={template.id}
            onClick={() => onSelectTemplate(template.subject, template.body)}
          >
            {template.name}
          </DropdownMenuItem>
        ))}
        {templates.length === 0 && (
          <DropdownMenuItem disabled>{t.templates.noTemplatesAvailable}</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

