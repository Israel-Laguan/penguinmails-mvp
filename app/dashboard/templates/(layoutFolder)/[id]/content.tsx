'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { TemplateHeader } from "@/components/templates/TemplateHeader";
import { TemplateViewMode } from "@/components/templates/TemplateViewMode";
import { copyText as t } from "@/components/templates/copy";
import { Template } from '@/app/api/generated/prisma';

interface TemplateContentProps {
  template: Template | undefined;
}

export default function TemplateContent({ template }: TemplateContentProps) {
  const router = useRouter();

  if (!template) {
    return (
      <div className="space-y-6 animate-fade-in">
        <Card>
          <CardContent className="p-6">
            <p>{t.errors.templateNotFound.message}</p>
            <button className="mt-4" onClick={() => router.push("/dashboard/templates")}>
              {t.errors.templateNotFound.action}
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <TemplateHeader 
        templateName={template.name}
        templateId={template.id}
        isViewMode={true}
      />
      
      <Card className="overflow-visible">
        <CardContent className="p-6 space-y-4">
          <TemplateViewMode template={template} />
        </CardContent>
      </Card>
    </div>
  );
}