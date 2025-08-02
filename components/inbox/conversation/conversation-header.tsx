"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useConversation } from "@/context/ConversationContext";
import { Calendar } from "lucide-react";
import ConversationHeaderButtons from "./conversation-header-buttons";
const getTagColor = (tag: string) => {
  switch (tag) {
    case "interested":
      return "bg-green-100 text-green-800 border-green-200";
    case "not-interested":
      return "bg-red-100 text-red-800 border-red-200";
    case "maybe-later":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "replied":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "follow-up":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};
function ConversationHeader() {
  const { selectedConversation } = useConversation();

  return (
    <div className="p-6 border-b border-gray-200 bg-white space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
              {selectedConversation.avatar}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              {selectedConversation.name}
            </h1>
            <div className="flex items-center space-x-2 text-gray-600">
              <span>{selectedConversation.email}</span>
            </div>
          </div>
        </div>
        <ConversationHeaderButtons />
      </div>

      {/* Campaign and Status Info */}
      <div className="flex items-center space-x-4 ">
        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
          {selectedConversation.campaign}
        </Badge>
        <Badge
          variant="outline"
          className={getTagColor(selectedConversation.tag)}
        >
          {selectedConversation.tag.replace("-", " ")}
        </Badge>
        {selectedConversation.followUpDate && (
          <Badge variant="secondary" className="bg-orange-100 text-orange-700">
            <Calendar className="w-3 h-3 mr-1" />
            Follow-up:{" "}
            {new Date(selectedConversation.followUpDate).toLocaleDateString()}
          </Badge>
        )}
      </div>
    </div>
  );
}
export default ConversationHeader;
