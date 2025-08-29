"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { initialFolders } from "@/lib/data/template.mock";
import { cn } from "@/lib/utils";
import { Copy, Edit, FolderX, MoreHorizontal, Star, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import Folders from "./Folder-Structure/Folders";

interface TemplateActionsProps {
  templateId: string;
  type: "quick-reply" | "template";
  numberOfShowen?: number;
  hidden?: boolean;
}

interface ActionItem {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  action: string;
  label: string;
}

const ACTIONS: ActionItem[] = [
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

function TemplateActions({
  templateId,
  type,
  numberOfShowen = 3,
  hidden = true,
}: TemplateActionsProps) {
  const router = useRouter();
  const [showMoveDialog, setShowMoveDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const folders = initialFolders.filter((folder) => folder.type === type);

  // Action handlers
  const handleStar = useCallback(() => {
    console.log("Star action for template:", templateId);
    // TODO: Implement star functionality
  }, [templateId]);

  const handleCopy = useCallback(() => {
    console.log("Copy action for template:", templateId);
    // TODO: Implement copy functionality
  }, [templateId]);

  const handleEdit = useCallback(() => {
    router.push(`/templates/edit/${templateId}`);
  }, [router, templateId]);

  const handleMove = useCallback(() => {
    setShowMoveDialog(true);
  }, []);

  const handleDelete = useCallback(() => {
    setShowDeleteDialog(true);
  }, []);

  const confirmDelete = useCallback(() => {
    console.log("Deleting template:", templateId);
    // TODO: Implement delete functionality
    setShowDeleteDialog(false);
  }, [templateId]);

  const confirmMove = useCallback(() => {
    console.log("Moving template:", templateId);
    // TODO: Implement move functionality
    setShowMoveDialog(false);
  }, [templateId]);

  const actionHandlers = useMemo(
    () => ({
      favorite: handleStar,
      copy: handleCopy,
      edit: handleEdit,
      move: handleMove,
      delete: handleDelete,
    }),
    [handleStar, handleCopy, handleEdit, handleMove, handleDelete]
  );

  const handleAction = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
      e.stopPropagation();
      const action = e.currentTarget.dataset
        .action as keyof typeof actionHandlers;

      if (action && actionHandlers[action]) {
        actionHandlers[action]();
      }
    },
    [actionHandlers]
  );

  const visibleActions = ACTIONS.slice(0, numberOfShowen);
  const hiddenActions = ACTIONS.slice(numberOfShowen);

  return (
    <>
      {/* Visible Actions */}
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

      {/* Dropdown Menu for Hidden Actions */}
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
                data-action={action}
                onClick={handleAction}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {/* Move Dialog */}
      <Dialog open={showMoveDialog} onOpenChange={setShowMoveDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Move Template</DialogTitle>
            <DialogDescription>
              Select a folder to move this template to.
            </DialogDescription>
          </DialogHeader>
          <div>
            <Folders folders={folders as TemplateFolder[]} showFiles={false} />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowMoveDialog(false)}>
              Cancel
            </Button>
            <Button onClick={confirmMove}>Move</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              template.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default TemplateActions;
