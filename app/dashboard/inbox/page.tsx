"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Settings, Filter, ArrowDown, RefreshCcw } from "lucide-react";
import InboxMessages from "./components/inbox-messages";
import { mockEmails } from "./mockEmails";
import { EmailsType, EmailsTypeSchema } from "./schemas/schemas";

export default function InboxPage() {
  const [emails, setEmails] = React.useState<EmailsType>(null);
  const [unreadCount, setUnreadCount] = React.useState(3);

  const getMessages = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    return EmailsTypeSchema.parse({emails: mockEmails});
  };
  
  const fetchMessages = async () => {
    const messages: EmailsType = await getMessages();
    setEmails(messages);
  };
  

  React.useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Inbox</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCcw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      <div className="bg-white border rounded-md">
        <div className="border-b px-4 py-3 flex items-center justify-between">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center w-full px-1">
              <TabsList className="flex">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">
                  Unread
                  <span className="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                    {unreadCount}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="starred">Starred</TabsTrigger>
              </TabsList>

              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search emails..."
                    className="pl-8 w-64 h-9"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            <InboxMessages emails={emails?.emails ?? []} />
          </Tabs>
        </div>

        <div className="px-4 py-2 border-b flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <span>8 conversations</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Sort by: Date</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
