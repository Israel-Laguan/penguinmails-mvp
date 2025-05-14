"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, RefreshCcw } from "lucide-react";
import { getAllMessages, getStarredMessages, getUnreadMessages } from "./actions";
import { EmailsType } from "./schemas/schemas";
import { inboxColumns } from "./components/inbox-columns";
import { DataTable } from "@/components/ui/data-table/data-table";

export default function InboxPage() {
  const [emails, setEmails] = React.useState<EmailsType>(null);
  const [unreadCount, setUnreadCount] = React.useState<number>(0);
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);


  const fetchAllMessages = async () => {
    console.log(selectedValues);
    
    const messages: EmailsType = await getAllMessages({selectedValues});
    setEmails(messages);
    setUnreadCount(messages?.unread || 0);
  };

  const fetchUnreadMessages = async () => {
    const messages: EmailsType = await getUnreadMessages();
    setEmails(messages);
  };

  const fetchStarredMessages = async () => {
    const messages: EmailsType = await getStarredMessages();
    setEmails(messages);
  };

  React.useEffect(() => {
    fetchAllMessages();
  }, []);

  const currentEmails = emails?.emails || [];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Inbox</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={()=> {window.location.reload()}}>
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
                <TabsTrigger value="all" onClick={fetchAllMessages}>All</TabsTrigger>
                <TabsTrigger value="unread" onClick={fetchUnreadMessages}>
                  Unread
                  <span className="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                    {unreadCount}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="starred" onClick={fetchStarredMessages}>Starred</TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-4">
              <DataTable columns={inboxColumns} data={currentEmails} selectedValues={selectedValues} setSelectedValues={setSelectedValues} />
            </div>
          </Tabs>
        </div>

        <div className="px-4 py-2 border-b flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <span>{currentEmails.length} conversations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
