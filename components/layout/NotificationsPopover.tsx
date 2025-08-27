import { Button } from "@/components/ui/button";
import { PopoverContent } from "@/components/ui/popover";
import { Notification, NotificationType } from "@/types/notification";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { Bell } from "lucide-react";
import NotificationsList from "./NotificationsList";
// Sample notifications data
const notifications: Notification[] = [
  {
    id: 1,
    type: NotificationType.REPLY,
    title: "Sarah Johnson replied to your email",
    message: "Thanks for reaching out! I'd love to schedule a call...",
    time: "10 minutes ago",
    isRead: false,
  },
  {
    id: 2,
    type: NotificationType.CAMPAIGN,
    title: "Your campaign 'SaaS Outreach' has completed",
    message: "847 emails sent with 34.2% open rate",
    time: "1 hour ago",
    isRead: false,
  },
  {
    id: 3,
    type: NotificationType.WARNING,
    title: "Email account john@example.com needs attention",
    message: "Warmup process paused due to deliverability issues",
    time: "2 hours ago",
    isRead: false,
  },
  {
    id: 4,
    type: NotificationType.SUCCESS,
    title: "Domain verification completed",
    message: "mycompany.com is now ready for sending",
    time: "3 hours ago",
    isRead: true,
  },
  {
    id: 5,
    type: NotificationType.INFO,
    title: "Weekly performance report is ready",
    message: "View your campaign analytics for this week",
    time: "1 day ago",
    isRead: true,
  },
];
function NotificationsPopover() {
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className=" group relative">
          <Bell className="w-5 h-5 font-bold   group-hover:scale-110 transition-transform" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 sm:w-96 bg-white border border-gray-200 p-0 rounded-xl shadow-lg  max-h-96 overflow-hidden">
        <NotificationsList notifications={notifications} />
      </PopoverContent>
    </Popover>
  );
}
export default NotificationsPopover;
