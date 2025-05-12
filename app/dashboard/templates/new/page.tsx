'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { TemplateForm, TemplateFormValues } from '@/components/templates/TemplateForm';
import { createTemplate } from '../actions';
import { copyText as t } from "@/components/templates/copy";

export default function CreateTemplatePage() {
  const router = useRouter();

  const handleSubmit = async (data: TemplateFormValues) => {
    try {
      const template = await createTemplate({
        ...data,
        bodyHtml: data.body, // In a real app, you'd convert markdown/text to HTML here
      });
      
      if (template) {
        toast.success(t.notifications.templateSaved.title, {
          description: t.notifications.templateSaved.description
        });
        router.push('/dashboard/templates');
      } else {
        throw new Error(t.notifications.error.createFailed.title);
      }
    } catch (error) {
      toast.error(t.notifications.error.createFailed.title, {
        description: error instanceof Error ? error.message : t.notifications.error.createFailed.description
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">{t.newTemplate.title}</h1>
      </div>
      
      <TemplateForm
        onSubmit={handleSubmit}
        onCancel={() => router.push('/dashboard/templates')}
      />
    </div>
  );
}
