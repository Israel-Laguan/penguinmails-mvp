import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { conversations } from "@/lib/data/Inbox.mock";
import { cn, getRelativeTime } from "@/lib/utils";
import {
  Eye,
  MoreHorizontal,
  Pin,
  RefreshCw,
  Settings,
  Star,
} from "lucide-react";
import Link from "next/link";
import ConversationsListHeader from "./ConversationsListHeader";

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

function ConversationsList({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const filteredConversations = conversations;

  return (
    <div className="flex flex-col h-full w-full">
      <ConversationsListHeader />

      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-4">
          {filteredConversations.map((conversation) => (
            <Link
              key={conversation.id}
              href={`/dashboard/inbox/${conversation.id}`}
              className="block"
            >
              <Card
                className={cn(
                  "cursor-pointer hover:shadow-md transition-all duration-200 group p-0"
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-semibold text-white">
                          {conversation.avatar}
                        </span>
                      </div>
                      {conversation.status === "unread" && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {conversation.name}
                          </h3>
                          {conversation.isStarred && (
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          )}
                          {conversation.isPinned && (
                            <Pin className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          {getRelativeTime(conversation.time)}
                        </span>
                      </div>

                  

                      <h4 className="font-medium text-gray-900 mb-2">
                        {conversation.subject}
                      </h4>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {conversation.preview}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-sm font-medium",
                              getTagColor(conversation.tag)
                            )}
                          >
                            {conversation.tag.replace("-", " ")}
                          </Badge>
                          <Badge variant="secondary" className="text-sm">
                            {conversation.campaign}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-yellow-50 hover:text-yellow-600"
                          >
                            <Star className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ConversationsList;
