"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Bold,
  Calendar,
  ChevronDown,
  Italic,
  Link,
  Paperclip,
  Send,
  Smile,
  Zap,
} from "lucide-react";
import { useState } from "react";

function ConversationReplay() {
  const [replyText, setReplyText] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(false);

  const quickReplies = [
    "Thank you for your interest. I'll get back to you shortly.",
    "Let me review this and follow up with you.",
    "I appreciate you reaching out. Let's schedule a call.",
    "Thanks for the information. I'll process this request.",
  ];

  function handleSendReply() {
    console.log("Reply sent:", replyText, "Tag:", selectedTag);
    setReplyText("");
    setSelectedTag("");
  }

  function handleQuickReply(reply: string) {
    setReplyText(reply);
    setShowQuickReplies(false);
  }

  const toolbarButtons = [
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Link, label: "Link" },
  ];

  const actionButtons = [
    { icon: Paperclip, label: "Attach file" },
    { icon: Smile, label: "Add emoji" },
  ];
  return (
    <>
      <div className="border-t bg-background w-full p-2 space-y-4 overflow-hidden">
        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          <Button className="bg-green-600 hover:bg-green-700 gap-2">
            <Calendar className="h-4 w-4" />
            Schedule Follow-up
          </Button>

          <Popover open={showQuickReplies} onOpenChange={setShowQuickReplies}>
            <PopoverTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                <Zap className="h-4 w-4" />
                Quick Reply
                <ChevronDown className="h-3 w-3" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-2 w-fit" align="start">
              <div className="space-y-1 flex flex-col w-fit ">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="text-sm justify-start"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Reply Textarea */}
        <Card className="overflow-hidden focus-within:ring-2 focus-within:ring-ring p-0 ">
          <div className="flex items-center space-x-1 p-3 border-b bg-muted/50">
            {toolbarButtons.map(({ icon: Icon, label }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Icon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            ))}

            <Separator orientation="vertical" className="h-4" />

            {actionButtons.map(({ icon: Icon, label }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Icon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <Textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Type your reply..."
            className="min-h-[100px] border-0 focus-visible:ring-0 resize-none"
          />
        </Card>

        {/* Send Actions */}
        <div className="flex items-center justify-between">
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Tag as..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="interested">Interested</SelectItem>
              <SelectItem value="not-interested">Not Interested</SelectItem>
              <SelectItem value="maybe-later">Maybe Later</SelectItem>
              <SelectItem value="follow-up">Needs Follow-up</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => setReplyText("")}>
              Cancel
            </Button>
            <Button
              onClick={handleSendReply}
              disabled={!replyText.trim()}
              className="gap-2"
            >
              <Send className="h-4 w-4" />
              Send Reply
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ConversationReplay;
