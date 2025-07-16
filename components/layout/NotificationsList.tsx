"use client";
import { Button } from "@/components/ui/button";
import { Notification } from "@/types/notification";
import { Bell } from "lucide-react";
import NotificationListItem from "./NotificationListItem";

function NotificationsList({
  notifications,
}: {
  notifications: Notification[];
}) {
  const markAllAsRead = () => {};

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  return (
    <>
      {/* Header */}
      <div className=" p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        <div className="flex items-center space-x-2">
          {unreadCount > 0 && (
            <Button onClick={markAllAsRead} variant={"link"}>
              Mark all as read
            </Button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <NotificationListItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <Bell className="w-8 h-8 text-gray-300 mx-auto mb-3" />
            <h4 className="text-sm font-medium text-gray-900 mb-1">
              No notifications
            </h4>
            <p className="text-sm text-gray-500">You&apos;re all caught up!</p>
          </div>
        )}
      </div>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="p-3 border-t border-gray-200 bg-gray-50">
          <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
            View all notifications
          </button>
        </div>
      )}
    </>
  );
}
export default NotificationsList;
