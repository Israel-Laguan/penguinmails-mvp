import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Clock, Eye, Mail, TrendingUp } from "lucide-react";
import Link from "next/link";
import TemplateActions from "./template-actions";

function TemplateItem({ template }: { template: Template }) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <Link href={`/dashboard/templates/${template.id}`}>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-semibold text-sm line-clamp-1">
                {template.name}
              </h3>
            </div>
          </Link>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-1  text-gray-500">
            <TemplateActions
              templateId={template.id.toString()}
              numberOfShowen={3}
              type="template"
            />
          </div>
        </div>
      </CardHeader>

      <Link href={`/dashboard/templates/${template.id}`}>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            Subject : {template.subject}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>{template.usage}</span>
            </div>
            <div className="flex items-center gap-1 text-primary">
              <Eye className="h-3 w-3" />
              <span>{template.openRate}</span>
            </div>
            <div className="flex items-center gap-1 text-green-500">
              <TrendingUp className="h-3 w-3" />
              <span>{template.replyRate}</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{template.lastUsed}</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}

export default TemplateItem;
