import { notificationStyles } from "@/lib/style";
import { Notification } from "@/types/notification";
import { Clock } from "lucide-react";

function NotificationListItem({
  notification,
}: {
  notification: Notification;
}) {
  const { icon: Icon, color } = notificationStyles(notification.type);
  const markAsRead = (id: number) => {
    // Logic to mark notification as read
  };
  return (
    <div
      key={notification.id}
      className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
        !notification.isRead ? "bg-blue-50" : ""
      }`}
      onClick={() => markAsRead(notification.id)}
    >
      <div className="flex items-start space-x-3">
        <div className={`p-2 rounded-lg ${color} flex-shrink-0`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h4
              className={`text-sm font-medium text-gray-900 ${
                !notification.isRead ? "font-semibold" : ""
              }`}
            >
              {notification.title}
            </h4>
            {!notification.isRead && (
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {notification.message}
          </p>
          <p className="text-xs text-gray-500 mt-2 flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{notification.time}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default NotificationListItem;
