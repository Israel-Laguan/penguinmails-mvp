import { getTemplate } from '../../actions';
import EditTemplateContent from './content';
import { Template } from '@/app/api/generated/prisma';
import { Card, CardContent } from "@/components/ui/card";
import { copyText as t } from "@/components/templates/copy";

export default async function TemplateEditPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const templateId = parseInt(id);
  let template: Template | null = null;
  
  try {
    template = await getTemplate(templateId);
  } catch (error) {
    console.error('Error loading template:', error);
  }

  if (!template) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <p>{t.errors.templateNotFound.message}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <EditTemplateContent template={template} />;
}
