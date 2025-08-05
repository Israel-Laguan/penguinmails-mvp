"use client";

import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
/**
 * AlertDialogDelete component for confirming deletion actions.
 * @param {string} title - The title of the alert dialog.
 * @param {string} description - The description of the alert dialog.
 * @param {function} onDelete - Callback function to execute when delete is confirmed.
 */
function AlertDialogDelete({
  title,
  description,
  onDelete,
}: {
  title: string;
  description: string;
  onDelete: () => Promise<void>;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = () => {
    toast.promise(
      async () => {
        setIsLoading(true);
        await onDelete();
        setIsLoading(false);
      },
      {
        loading: "Deleting...",
        success: "Deleted successfully",
        error: "Failed to delete",
      }
    );
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:text-destructive">
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              disabled={isLoading}
              onClick={handleDelete}
              variant="destructive"
              className="bg-red-600 hover:bg-red-700 "
            >
              Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default AlertDialogDelete;
