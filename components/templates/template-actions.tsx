"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Copy, Edit, FolderX, MoreHorizontal, Star, Trash } from "lucide-react";

function TemplateActions({
  templateId,
  numberOfShowen = 3,
  hidden = true,
}: {
  templateId: string;
  numberOfShowen?: number;
  hidden?: boolean;
}) {
  function handleAction(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const action = e.currentTarget.dataset.action;
  }
  const actions = [
    {
      icon: Star,
      color: "hover:text-yellow-500",
      action: "favorite",
      label: "Favorite",
    },
    {
      icon: Copy,
      color: "hover:text-blue-500",
      action: "copy",
      label: "Copy",
    },
    {
      icon: Edit,
      color: "hover:text-green-500",
      action: "edit",
      label: "Edit",
    },
    {
      icon: FolderX,
      color: "hover:text-purple-500",
      action: "move",
      label: "Move",
    },
    {
      icon: Trash,
      color: "hover:text-red-500",
      action: "delete",
      label: "Delete",
    },
  ];

  const visibleActions = actions.slice(0, numberOfShowen);
  const hiddenActions = actions.slice(numberOfShowen);

  return (
    <>
      {visibleActions.map(({ icon: Icon, color, action }, index) => (
        <Button
          key={index}
          variant="ghost"
          className={cn("p-1 rounded-md", color)}
          data-action={action}
          onClick={handleAction}
        >
          <Icon className="w-4 h-4" />
        </Button>
      ))}

      {hidden && hiddenActions.length > 0 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-1 rounded-md">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {hiddenActions.map(({ icon: Icon, action, label }, index) => (
              <DropdownMenuItem
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  // Trigger the action here
                  const mockEvent = {
                    currentTarget: { dataset: { action } },
                    stopPropagation: () => {},
                  } as any;
                  handleAction(mockEvent);
                }}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}

export default TemplateActions;
