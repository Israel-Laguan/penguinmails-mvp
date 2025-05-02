"use client";

import React from "react";
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
const templates = [
  { id: 1, name: "Intro Offer", subject: "Quick Question about [Company Name]", body: "Hi {{firstName}},\n\nI saw you recently..." },
  { id: 2, name: "Follow Up 1", subject: "Re: Quick Question", body: "Hi {{firstName}},\n\nJust wanted to follow up..." },
  { id: 3, name: "Breakup Email", subject: "Closing the loop", body: "Hi {{firstName}},\n\nSince I haven't heard back..." },
];

export function TemplateSelector({ onSelectTemplate }: TemplateSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1">
          <FileText className="h-4 w-4" />
          Import Template
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Select a Template</DropdownMenuLabel>
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
          <DropdownMenuItem disabled>No templates available</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

