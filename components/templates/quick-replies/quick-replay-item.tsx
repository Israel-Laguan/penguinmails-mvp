import { Card, CardContent } from "@/components/ui/card";
import TemplateActions from "../template-actions";
import Link from "next/link";

function QuickReplyItem({ template }: { template: Template }) {
  return (
    <Card className="hover:shadow-lg  duration-400 group">
      <CardContent className="flex justify-between">
        <Link href={`/dashboard/templates/quick-replies/${template.id}`}>
          <div className="space-y-1">
            <h3 className="text-lg font-medium">{template.name}</h3>
            <p className="text-sm text-gray-500">{template.content}</p>
          </div>
        </Link>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-1  text-gray-500">
          <TemplateActions
            templateId={template.id.toString()}
            numberOfShowen={3}
            type="quick-reply"
          />
        </div>
      </CardContent>
    </Card>
  );
}
export default QuickReplyItem;
