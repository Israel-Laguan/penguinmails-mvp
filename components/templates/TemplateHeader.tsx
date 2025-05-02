"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, Save } from "lucide-react";

interface TemplateHeaderProps {
  templateName: string;
  templateId: number | string;
  isViewMode: boolean;
  onSave: () => void;
}

export function TemplateHeader({ templateName, templateId, isViewMode, onSave }: TemplateHeaderProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard/templates")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">
          {isViewMode ? templateName : `Edit: ${templateName}`}
        </h1>
      </div>
      <div className="flex items-center space-x-2">
        {isViewMode ? (
          <>
            <Button variant="outline" onClick={() => router.push(`/dashboard/templates/${templateId}/edit`)}>
              Edit Template
            </Button>
            <Button variant="outline">
              <Copy className="mr-2 h-4 w-4" />
              Duplicate
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline" onClick={() => router.push(`/dashboard/templates/${templateId}/view`)}>
              Cancel
            </Button>
            <Button onClick={onSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
