import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Archive, Pin, Star, Tag, X } from "lucide-react";
import Link from "next/link";
import ShowNotesButton from "./show-notes-button";
function ConversationHeaderButton({
  selectedConv,
}: {
  selectedConv: Conversation;
}) {
  return (
    <div className="flex items-center space-x-2">
      <ShowNotesButton />
      <Button variant="ghost" size="icon">
        <Star
          className={`w-5 h-5 ${
            selectedConv.isStarred ? "text-yellow-500 fill-current" : ""
          }`}
        />
      </Button>
      <Button variant="ghost" size="icon">
        <Pin
          className={`w-5 h-5 ${selectedConv.isPinned ? "text-blue-600" : ""}`}
        />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Tag className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {[
            "interested",
            "not-interested",
            "maybe-later",
            "replied",
            "follow-up",
          ].map((tag) => (
            <DropdownMenuItem
              key={tag}
              className={
                selectedConv.tag === tag ? "bg-blue-50 text-blue-700" : ""
              }
            >
              {tag.replace("-", " ")}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="icon">
        <Archive className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon" title="Back to inbox" asChild>
        <Link href={"/dashboard/inbox"}>
          <X className="w-5 h-5" />
        </Link>
      </Button>
    </div>
  );
}
export default ConversationHeaderButton;
