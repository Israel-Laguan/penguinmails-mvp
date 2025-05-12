import { builtInTemplates, userTemplates } from '@/components/templates/mocks';
import TemplateContent from './content';

const templateData = [...builtInTemplates, ...userTemplates];

export default async function TemplatePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const template = templateData.find(t => t.id === parseInt(id));
  
  return <TemplateContent template={template} />;
}
