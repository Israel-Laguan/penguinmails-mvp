
import { Template } from "@/app/api/generated/prisma";
import React from "react";

interface TemplateViewModeProps {
  template: Template;
}

export function TemplateViewMode({ template }: TemplateViewModeProps) {
  return (
    <>
      <div>
        <div className="text-sm font-medium text-muted-foreground mb-1">Category</div>
        <div>{template.category}</div>
      </div>
      
      <div>
        <div className="text-sm font-medium text-muted-foreground mb-1">Subject Line</div>
        <div className="p-3 bg-gray-50 rounded-md">{template.subject}</div>
      </div>
      
      <div>
        <div className="text-sm font-medium text-muted-foreground mb-1">Email Body</div>
        <div className="p-3 bg-gray-50 rounded-md whitespace-pre-wrap">{template.body}</div>
      </div>
      
      <div className="text-xs text-muted-foreground">
        Created {template.createdAt.toLocaleDateString()}
      </div>
    </>
  );
}
