import { Archive, MailOpen, Trash2 } from "lucide-react";
import { Email } from "../schemas/schemas";
import { TooltipButton } from "./tooltip-button";
import { showCustomToast } from "../../../../components/ui/custom-toast";
import { JSX } from "react";

export default function EmailActions({ email }: { email: Email }) {
  const handleAction = (action: string, icon: JSX.Element) => {
    showCustomToast({
      title: `Email "${email.subject}"`,
      description: `Email ${action}.`,
      icon,
    });
  };

  return (
    <div className="flex gap-1 mt-2">
      <TooltipButton
        label="Deleted"
        icon={<Trash2 className="w-4 h-4 text-red-500" />}
        onClick={() =>
          handleAction("deleted", <Trash2 className="w-5 h-5 text-red-500" />)
        }
      />
      <TooltipButton
        label="Filed"
        icon={<Archive className="w-4 h-4" />}
        onClick={() =>
          handleAction("filed", <Archive className="w-5 h-5 text-blue-500" />)
        }
      />
      <TooltipButton
        label="Mark as read"
        icon={<MailOpen className="w-4 h-4" />}
        onClick={() =>
          handleAction("mark as read", <MailOpen className="w-5 h-5 text-green-500" />)
        }
      />
    </div>
  );
}
