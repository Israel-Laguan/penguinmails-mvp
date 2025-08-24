import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Eye,
  TrendingUp,
  Clock,
  Star,
  Copy,
  Edit,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

function TemplateItem({ template }: { template: Template }) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-semibold text-sm line-clamp-1">
              {template.name}
            </h3>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-1  text-gray-500">
            {[
              {
                icon: Star,
                color: "hover:text-yellow-500",
              },
              {
                icon: Copy,
                color: "hover:text-blue-500",
              },
              {
                icon: Edit,
                color: "hover:text-green-500",
              },
              {
                icon: MoreHorizontal,
                color: "hover:text-red-500",
              },
            ].map(({ icon: Icon, color }, index) => (
              <Button
                key={index}
                variant="ghost"
                className={cn("p-1 rounded-md", color)}
              >
                <Icon className={`w-4 h-4 `} />
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          Subject :{" "}
          {template.content.length > 100
            ? `${template.content.substring(0, 100)}...`
            : template.content}
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
    </Card>
  );
}

export default TemplateItem;
