"use client";

import React, { useState } from "react";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DashboardHeaderProps {
  title?: string;
}

interface Notification {
  id: number;
  message: string;
  time: string;
  read: boolean;
  type: 'reply' | 'system' | 'warning';
}

// TODO: Replace with actual notification fetching logic
const notifications: Notification[] = [
  {
    id: 1,
    message: "Sarah Johnson replied to your email",
    time: "10 minutes ago",
    read: false,
    type: "reply"
  },
  {
    id: 2,
    message: "Your campaign 'SaaS Outreach' has completed",
    time: "1 hour ago",
    read: false,
    type: "system"
  },
  {
    id: 3,
    message: "Email account john@example.com needs attention",
    time: "2 hours ago",
    read: false,
    type: "warning"
  }
];

export function DashboardHeader({ title }: DashboardHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNotifications, setCurrentNotifications] = useState<Notification[]>(notifications);

  const unreadCount = currentNotifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setCurrentNotifications(
      currentNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setCurrentNotifications(
      currentNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  return (
    // Adjusted styling for consistency
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      {/* TODO: Add mobile sidebar toggle if needed */}
      <div className="flex-1">
        {/* Title can be passed or derived from route */}
        {/* {title && <h1 className="text-lg font-semibold">{title}</h1>} */}
      </div>

      <div className="flex flex-1 items-center gap-4 md:ml-auto md:flex-initial">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-muted/50"
            />
          </div>
        </form>

        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button size="icon" variant="ghost" className="rounded-full relative">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {unreadCount}
                </span>
              )}
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="px-4 py-3 border-b flex justify-between items-center">
              <h3 className="font-medium">Notifications</h3>
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs h-8"
                  onClick={markAllAsRead}
                >
                  Mark all as read
                </Button>
              )}
            </div>

            {currentNotifications.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                <p>No notifications</p>
              </div>
            ) : (
              <div className="max-h-80 overflow-auto">
                {currentNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 border-b last:border-0 hover:bg-muted/50 cursor-pointer ${!notification.read ? 'bg-muted/20' : ''}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1.5 ${
                        notification.type === 'reply'
                          ? 'bg-green-500'
                          : notification.type === 'warning'
                            ? 'bg-yellow-500'
                            : 'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* TODO: Add link to view all notifications */}
          </PopoverContent>
        </Popover>

        {/* TODO: Add User dropdown/menu here (from next-auth session) */}
      </div>
    </header>
  );
}

