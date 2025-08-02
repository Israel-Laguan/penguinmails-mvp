import { conversations } from "@/lib/data/Inbox.mock";
import ConversationsListHeader from "./ConversationsListHeader";
import { cn, getRelativeTime } from "@/lib/utils";
import { ArrowRight, Pin, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const getTagColor = (tag: string) => {
  switch (tag) {
    case "interested":
      return "bg-green-50 text-green-700 border-green-200 hover:bg-green-100";
    case "not-interested":
      return "bg-red-50 text-red-700 border-red-200 hover:bg-red-100";
    case "maybe-later":
      return "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100";
    case "replied":
      return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
    case "follow-up":
      return "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100";
  }
};

function ConversationSmallList() {
  const filteredConversations = conversations;
  return (
    <div className="flex flex-col h-full">
      <ConversationsListHeader title="Conversations" />
      <div className="overflow-y-auto p-2 space-y-2">
        {filteredConversations.map((conversation) => (
          <Link
            key={conversation.id}
            href={`/dashboard/inbox/${conversation.id}`}
            className="block"
          >
            <Card className="hover:shadow-md transition-all duration-200 cursor-pointer relative">
              {conversation.isPinned && (
                <div className="absolute top-2 right-2 z-10">
                  <Pin className="w-3 h-3 text-blue-600" />
                </div>
              )}

              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-white">
                        {conversation.avatar}
                      </span>
                    </div>
                    {conversation.status === "unread" && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full border-2 border-white"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`font-semibold truncate ${
                          conversation.status === "unread"
                            ? "text-gray-900"
                            : "text-gray-700"
                        }`}
                      >
                        {conversation.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        {conversation.isStarred && (
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        )}
                        <span className="text-xs text-gray-500">
                          {getRelativeTime(conversation.time)}
                        </span>
                      </div>
                    </div>

                    

                    <p
                      className={`text-sm truncate mb-2 ${
                        conversation.status === "unread"
                          ? "font-medium text-gray-900"
                          : "text-gray-600"
                      }`}
                    >
                      {conversation.preview}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 flex-wrap">
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs font-medium",
                            getTagColor(conversation.tag)
                          )}
                        >
                          {conversation.tag.replace("-", " ")}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {conversation.campaign}
                        </Badge>
                      </div>
                      {conversation.lastMessage === "incoming" && (
                        <ArrowRight className="w-3 h-3 text-green-600" />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default ConversationSmallList;
