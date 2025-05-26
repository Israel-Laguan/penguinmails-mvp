import { Row } from "@tanstack/react-table";
import { Email } from "../schemas/schemas";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, EyeClosed, MailOpen, MoreVertical, SquareArrowDown, Trash2Icon } from "lucide-react";
import { showCustomToast } from "@/components/ui/custom-toast";
import { markEmailAsRead } from "../actions";

export function InboxColumnAction({
  refetch,
  row,
}: {
  refetch: () => void;
  row: Row<Email>;
}) {
  const emailId = row.original.id;

  const markAsReadMutation = async (id: number) => {
    try {
      // Simulate marking email as read
      await markEmailAsRead(id);

      showCustomToast({ title: "Email marked as read", description: `Email ${id} has been marked as read`, icon: <MailOpen className="text-black" /> });
      refetch();
    } catch (error) {
      showCustomToast({ title: "Error", description: `Failed to mark email ${id} as read`, icon: <EyeClosed className="text-red-500" /> });
      console.error("Error marking email as read:", error);
    }
  };
  const deleteEmailMutation = async (id: number) => {
    try {
      // Simulate deleting email
      showCustomToast({ title: "Email deleted", description: `Email ${id} has been deleted`, icon: <Trash2Icon className="text-black" /> });
      refetch();
    } catch (error) {
      showCustomToast({ title: "Error", description: `Failed to delete email ${id}`, icon: <Trash2Icon className="text-red-500" /> });
      console.error("Error deleting email:", error);
    }
    };
    const viewEmailMutation = async (id: number) => {
    try {
      // Simulate viewing email
      showCustomToast({ title: "Viewing email", description: `Email ${id} is being viewed`, icon: <Eye className="text-black" /> });
      refetch();
    } catch (error) {
      showCustomToast({ title: "Error", description: `Failed to view email ${id}`, icon: <EyeClosed className="text-red-500" /> });
      console.error("Error viewing email:", error);
    }
    };
    const hideEmailMutation = async (id: number) => {
    try {
      // Simulate hiding email
      showCustomToast({ title: "Email hidden", description: `Email ${id} has been hidden`, icon: <SquareArrowDown className="text-black" /> });
      refetch();
    } catch (error) {
      showCustomToast({ title: "Error", description: `Failed to hide email ${id}`, icon: <SquareArrowDown className="text-red-500" /> });
      console.error("Error hiding email:", error);
    }
    };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="text-black bold"  align="end">
        <DropdownMenuItem onClick={() => markAsReadMutation(emailId)}>
            <MailOpen className="text-black" />
          Mark as read
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => showCustomToast({title:"Delete", description: "Email deleted" + ` ${emailId}`, icon: <Trash2Icon className="text-black" />})}>
            <Trash2Icon className="text-black" />
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => showCustomToast({title:"View", description: "Viewing email" + ` ${emailId}`, icon: <Eye className="text-black" />})}>
            <Eye className="text-black" />
          View
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => showCustomToast({title:"Hide", description: "Email hidden" + ` ${emailId}`, icon: <SquareArrowDown className="text-black" />})}>
            <SquareArrowDown className="text-black" />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

