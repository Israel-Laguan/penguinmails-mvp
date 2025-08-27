import Icon from "@/components/Icon";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Clock, Mail, TrendingUp, X } from "lucide-react";
const list = [
  {
    id: "unread",
    label: "Unread",
    count: 24,
    icon: Mail,
    borderColor: "border-blue-200",
    iconBackground: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "interested",
    label: "Interested",
    count: 12,
    icon: TrendingUp,
    borderColor: "border-green-200",
    iconBackground: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "avgResponse",
    label: "Avg Response",
    count: "2.3h",
    icon: Clock,
    borderColor: "border-purple-200",
    iconColor: "text-purple-600",
    iconBackground: "bg-purple-100",
  },
  {
    id: "notInterested",
    label: "Not Interested",
    count: 8,
    icon: X,
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    iconBackground: "bg-red-100",
  },
];
function SmartInsights() {
  return (
    <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Smart Insights
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {list.map((item) => (
          <Card key={item.id} className={cn(item.borderColor , "p-1")}>
            <CardContent className="flex items-center space-x-3 p-4">
              <div className={cn("rounded-lg p-1.5", item.iconBackground)}>
                <Icon
                  icon={item.icon}
                  className={cn("w-4 h-4 ", item.iconColor)}
                />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{item.count}</p>
                <h3 className="text-sm font-medium text-gray-600">
                  {item.label}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default SmartInsights;
