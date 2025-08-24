import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Copy, Edit, MoreHorizontal, Star } from "lucide-react";

function QuickReplyItem({ template }: { template: Template }) {
  return (
    <Card className="hover:shadow-lg  duration-400 group">
      <CardContent className="flex justify-between ">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">{template.name}</h3>
          <p className="text-sm text-gray-500">{template.content}</p>
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
      </CardContent>
    </Card>
  );
}
export default QuickReplyItem;
