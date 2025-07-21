import { activityLog } from "@/lib/data/campaigns";
import { AlertTriangle, CheckCircle, Clock, Eye, Mail } from "lucide-react";
const getActivityIcon = (type: string) => {
  switch (type) {
    case "sent":
      return <Mail className="w-4 h-4 text-blue-600" />;
    case "reply":
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    case "opened":
      return <Eye className="w-4 h-4 text-purple-600" />;
    case "bounced":
      return <AlertTriangle className="w-4 h-4 text-red-600" />;
    default:
      return <Clock className="w-4 h-4 text-gray-600" />;
  }
};
function ActivityTab() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Activity Log</h3>

      <div className="space-y-4">
        {activityLog.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex-shrink-0 mt-1">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{activity.message}</p>
              <p className="text-sm text-gray-600 mt-1">{activity.details}</p>
              <p className="text-xs text-gray-500 mt-2">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ActivityTab;
