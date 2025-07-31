"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useConversation } from "@/context/ConversationContext";
import { X } from "lucide-react";
import { useState } from "react";

function NotesPanel() {
  const { showNotes, setShowNotes, selectedConversation } = useConversation();
  const [notes, setNotes] = useState(selectedConversation.notes || "");
  if (!showNotes) return null;
  function handleClose() {
    setShowNotes(false);
  }

  return (
    <div className="p-4 bg-yellow-50 border-b border-yellow-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-yellow-900">Internal Notes</h3>
        <Button
          variant="ghost"
          size={"icon"}
          onClick={handleClose}
          className="text-yellow-600 hover:text-yellow-800"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
      <Textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add internal notes about this conversation..."
        className="w-full p-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none bg-white"
        rows={3}
      />
      <div className="flex justify-end mt-2">
        <Button
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          onClick={handleClose}
        >
          Save Notes
        </Button>
      </div>
    </div>
  );
}
export default NotesPanel;
