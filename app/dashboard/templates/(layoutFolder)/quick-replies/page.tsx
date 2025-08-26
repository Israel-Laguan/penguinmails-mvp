import QuickReplyItem from "@/components/templates/quick-replies/quick-replay-item";
import { Input } from "@/components/ui/input";
import { initialQuickReplies } from "@/lib/data/template.mock";

function page() {
  return (
    <div className="p-4 space-y-4">
      <div>
        <Input placeholder="Search Templates" />
      </div>
      <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-400px)]">
        {initialQuickReplies.map((template) => (
          <QuickReplyItem key={template.id} template={template as Template} />
        ))}
      </div>
    </div>
  );
}
export default page;
