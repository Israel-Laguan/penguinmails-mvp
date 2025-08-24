import TemplateItem from "@/components/templates/template-item";
import { Input } from "@/components/ui/input";
import { initialTemplates } from "@/lib/data/template.mock";

function Page() {
  const templates = initialTemplates;
  return (
    <div className="p-4 space-y-4 h-full">
      <div>
        <Input placeholder="Search Templates" />
      </div>
      <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-400px)]">
        {templates.map((template) => (
          <TemplateItem key={template.id} template={template as Template} />
        ))}
      </div>
    </div>
  );
}
export default Page;
