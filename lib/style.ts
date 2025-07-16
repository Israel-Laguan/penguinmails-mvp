import { NotificationType } from "@/types/notification";
import { Send, BarChart3, AlertTriangle, Check, Info } from "lucide-react";

export const notificationStyles = (type: NotificationType) => {
  switch (type) {
    case NotificationType.REPLY:
      return {
        color: "text-green-600 bg-green-100",
        icon: Send,
      };
    case NotificationType.CAMPAIGN:
      return {
        icon: BarChart3,
        color: "text-blue-600 bg-blue-100",
      };
    case NotificationType.WARNING:
      return {
        icon: AlertTriangle,
        color: "text-orange-600 bg-orange-100",
      };
    case NotificationType.SUCCESS:
      return {
        icon: Check,
        color: "text-green-600 bg-green-100",
      };
    case NotificationType.INFO:
      return {
        icon: Info,
        color: "text-gray-600 bg-gray-100",
      };
    default:
      return {
        icon: Info,
        color: "bg-gray-100 text-gray-800",
      };
  }
};
