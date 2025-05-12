import React from "react";
import { Template } from "@/app/api/generated/prisma";
import { copyText as t } from "@/components/templates/copy";

interface TemplateViewModeProps {
  template: Template;
}

export function TemplateViewMode({ template }: TemplateViewModeProps) {
  return (
    <>
      <div>
        <div className="text-sm font-medium text-muted-foreground mb-1">{t.category.label}</div>
        <div>{template.category}</div>
      </div>
      
      <div>
        <div className="text-sm font-medium text-muted-foreground mb-1">{t.subjectLine.label}</div>
        <div className="p-3 bg-gray-50 rounded-md">{template.subject}</div>
      </div>
      
      <div>
        <div className="text-sm font-medium text-muted-foreground mb-1">{t.emailBody.label}</div>
        <div className="p-3 bg-gray-50 rounded-md whitespace-pre-wrap">{template.body}</div>
      </div>
      
      <div className="text-xs text-muted-foreground">
        {t.created.label} {template.createdAt.toLocaleDateString()}
      </div>
    </>
  );
}
