"use client";
import { Button } from "@/components/ui/button";
import { useConversation } from "@/context/ConversationContext";
import { StickyNote } from "lucide-react";

function ShowNotesButton() {
  const { showNotes, setShowNotes } = useConversation();
  return (
    <Button
      variant={showNotes ? "secondary" : "ghost"}
      size="icon"
      onClick={() => setShowNotes(!showNotes)}
    >
      <StickyNote className="w-5 h-5" />
    </Button>
  );
}
export default ShowNotesButton;
