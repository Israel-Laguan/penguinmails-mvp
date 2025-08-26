"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Copy, Edit, MoreHorizontal, Star } from "lucide-react";
function TemplateActions() {
  function handleAction(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const action = e.currentTarget.dataset.action;
    console.log(`Performing ${action} action`);
  }
  return (
    <>
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
          data-action={color}
          onClick={handleAction}
        >
          <Icon className={`w-4 h-4 `} />
        </Button>
      ))}
    </>
  );
}
export default TemplateActions;
