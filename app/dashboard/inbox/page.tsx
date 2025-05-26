"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, RefreshCcw } from "lucide-react";
import { getAllMessages } from "./actions";
import { Email } from "./schemas/schemas";
import { inboxColumns } from "./components/inbox-columns";
import { InboxDataTable } from "@/app/dashboard/inbox/components/inbox-data-table/data-table";
import DatatablePagination from "@/app/dashboard/inbox/components/inbox-data-table/data-table-pagination";

export default function InboxPage() {
  const [emails, setEmails] = React.useState<Email[]>([]);
  const [unreadCount, setUnreadCount] = React.useState<number>(0);
  const [filterValue, setFilterValue] = React.useState<{
    [key: string]: string[] | undefined;
  }>({});
  const [page, setPage] = React.useState<number>(1);
  const [pageSize, setPageSize] = React.useState<number>(10);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const [type, setType] = React.useState<"all" | "unread" | "starred">("all");
  const [search, setSearch] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchAllMessages = async () => {
    try {
      setIsLoading(true);
      setType(type);
      const messages = await getAllMessages(filterValue, type, {
        page,
        limit: pageSize,
      }, search);
      setEmails(messages.emails);
      setUnreadCount(messages?.unread || 0);
  
      if (messages?.emails) {
        setTotalPages(messages.totalPages);
      }
      return messages.emails; 
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchAllMessages();
  }, [page, pageSize, type]);

  const currentEmails = emails || [];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Inbox</h1>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              window.location.reload();
            }}
          >
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
                <TabsTrigger
                  value="all"
                  onClick={() => setType("all")}
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="unread"
                  onClick={() => setType("unread")}
                >
                  Unread
                  <span className="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                    {unreadCount}
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="starred"
                  onClick={() => setType("starred")}
                >
                  Starred
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-4">
              <InboxDataTable
                columns={inboxColumns}
                data={currentEmails}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                fetchAllMessages={fetchAllMessages}
                setSearch={setSearch}
                isLoading={isLoading}
              />
              <DatatablePagination
                page={page}
                pageSize={pageSize}
                totalPages={totalPages}
                setPage={setPage}
                setPageSize={setPageSize}
                fetchAllMessages={fetchAllMessages}
                type={type}
              />
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
