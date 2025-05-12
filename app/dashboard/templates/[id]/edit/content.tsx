'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TemplateHeader } from "@/components/templates/TemplateHeader";
import { TemplateForm, TemplateFormValues } from "@/components/templates/TemplateForm";
import { updateTemplate, getTemplate } from '../../actions';
import { copyText as t } from "@/components/templates/copy";
import { Template } from '@/app/api/generated/prisma';

interface ContentProps {
  template: Template;
}

export default function EditTemplateContent({ template: initialTemplate }: ContentProps) {
  const router = useRouter();
  const [template, setTemplate] = useState<Template>(initialTemplate);
  const templateId = template.id;

  const handleSubmit = async (data: TemplateFormValues) => {
    try {
      const updatedTemplate = await updateTemplate(templateId, {
        ...data,
        bodyHtml: data.body, // In a real app, you'd convert markdown/text to HTML here
      });
      
      if (updatedTemplate) {
        toast.success(t.notifications.templateSaved.title, {
          description: t.notifications.templateSaved.description
        });
        setTemplate(updatedTemplate);
        // router.push('/dashboard/templates');
      } else {
        toast.error(t.notifications.templateSaved.error, {
          description: t.notifications.templateSaved.errorDescription
        });
        getTemplate(templateId)
          .then((template) => {
            if (template) {
              setTemplate(template);
            } else {
              toast.error(t.errors.templateNotFound.message);
            }
          }
        )
          .catch((error) => {
            console.error('Error loading template:', error);
            toast.error(t.errors.templateNotFound.message);
          }
        );
      }
    } catch (error) {
      toast.error(t.notifications.templateUpdateError.title, {
        description: error instanceof Error ? error.message : t.notifications.templateUpdateError.description
      });
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <TemplateHeader 
        templateName={template.name}
        templateId={templateId}
        isViewMode={false}
      />
      
      <Card className="overflow-visible">
        <CardContent className="p-6">
          <TemplateForm
            initialData={{
              name: template.name,
              category: template.category,
              subject: template.subject,
              body: template.body,
            }}
            onSubmit={handleSubmit}
            onCancel={() => router.push('/dashboard/templates/' + templateId)}
            submitLabel={t.templateCard.actions.edit}
          />
        </CardContent>
      </Card>
    </div>
  );
}