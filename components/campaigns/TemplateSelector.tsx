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
import { Template } from "@/app/api/generated/prisma";

interface TemplateSelectorProps {
  template?: Template;
  onSelectTemplate: (subject: string, body: string) => void;
}

// TODO: Fetch templates dynamically
const templates = t.templates.items.map((item, index) => ({
  id: index + 1,
  ...item,
}));

export function TemplateSelector({
  template: currentTemplate,
  onSelectTemplate,
}: TemplateSelectorProps) {
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
            className={currentTemplate?.id === template.id ? "bg-accent" : ""}
          >
            {template.name}
          </DropdownMenuItem>
        ))}
        {templates.length === 0 && (
          <DropdownMenuItem disabled>
            {t.templates.noTemplatesAvailable}
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
