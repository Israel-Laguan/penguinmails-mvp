"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy } from "lucide-react";
import { copyText as t } from "./copy";

interface TemplateHeaderProps {
  templateName: string;
  templateId: number;
  isViewMode: boolean;
}

export function TemplateHeader({ templateName, templateId, isViewMode }: TemplateHeaderProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard/templates")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">
          {isViewMode ? templateName : `${t.templateCard.actions.edit} ${templateName}`}
        </h1>
      </div>
      <div className="flex items-center space-x-2">
        {isViewMode && (
          <>
            <Button variant="outline" onClick={() => router.push(`/dashboard/templates/${templateId}/edit`)}>
              {t.viewTemplate.actions.edit}
            </Button>
            <Button variant="outline">
              <Copy className="mr-2 h-4 w-4" />
              {t.viewTemplate.actions.duplicate}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
