"use client";
import { Button } from "@/components/ui/button";
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
} from "../ui/alert-dialog";
import { toast } from "sonner";
function DeleteDomainDialog({ domainId }: { domainId: number }) {
  async function handleDelete() {
    toast.promise(
      async () => {
        // Simulate API call to delete domain
        await new Promise((resolve) => setTimeout(resolve, 1000));
      },
      {
        loading: "Deleting domain...",
        success: "Domain deleted successfully",
        error: "Failed to delete domain",
      }
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:text-destructive">
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Domain</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this domain? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              onClick={handleDelete}
              variant="destructive"
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default DeleteDomainDialog;
