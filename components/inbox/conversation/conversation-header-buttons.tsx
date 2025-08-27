"use client ";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useConversation } from "@/context/ConversationContext";
import { cn } from "@/lib/utils";
import { Archive, Pin, Star, Tag, X } from "lucide-react";
import Link from "next/link";
import ShowNotesButton from "./show-notes-button";
import SidebarTriggerButton from "./SidebarTriggerButton";

function ConversationHeaderButtons() {
  const { selectedConversation } = useConversation();
  return (
    <div className="flex items-center space-x-2">
      <SidebarTriggerButton />
      <ShowNotesButton />
      <Button variant="ghost" size="icon">
        <Star
          className={cn(
            "w-5 h-5",
            selectedConversation.isStarred && "text-yellow-500 fill-current"
          )}
        />
      </Button>
      <Button variant="ghost" size="icon">
        <Pin
          className={cn(
            "w-5 h-5",
            selectedConversation.isPinned && "text-blue-600"
          )}
        />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Tag className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {["interested", "not-interested", "maybe-later", "follow-up"].map(
            (tag) => (
              <DropdownMenuItem
                key={tag}
                className={cn(
                  selectedConversation.tag === tag && "bg-blue-50 text-blue-700"
                )}
              >
                {tag.replace("-", " ")}
              </DropdownMenuItem>
            )
          )}
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
export default ConversationHeaderButtons;
