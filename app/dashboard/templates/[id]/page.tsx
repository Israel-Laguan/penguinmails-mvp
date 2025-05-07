'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { TemplateHeader } from "@/components/templates/TemplateHeader";
import { TemplateViewMode } from "@/components/templates/TemplateViewMode";
import { builtInTemplates, userTemplates } from '@/components/templates/mocks';

const templateData = [...builtInTemplates, ...userTemplates];

export default function TemplatePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const template = templateData.find(t => t.id === parseInt(params.id));

  if (!template) {
    return (
      <div className="space-y-6 animate-fade-in">
        <Card>
          <CardContent className="p-6">
            <p>The template you're looking for doesn't exist.</p>
            <button className="mt-4" onClick={() => router.push("/dashboard/templates")}>
              Return to Templates
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
