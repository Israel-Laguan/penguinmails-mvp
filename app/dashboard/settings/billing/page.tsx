import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { BarChart3, CreditCard } from "lucide-react";
import BillingTab from "./Billing-Tab";
import UsageTab from "./usage-tab";

interface UsageItem {
  label: string;
  current: number;
  limit: number;
  color: string;
}

const usageItems: UsageItem[] = [
  {
    label: "Emails Sent",
    current: 2847,
    limit: 10000,
    color: "bg-blue-600",
  },
  {
    label: "Active Mailboxes",
    current: 5,
    limit: 15,
    color: "bg-green-600",
  },
  {
    label: "Team Members",
    current: 3,
    limit: 10,
    color: "bg-purple-600",
  },
];

const UsageProgressItem = ({ item }: { item: UsageItem }) => {
  const percentage = (item.current / item.limit) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{item.label}</span>
        <span className="font-medium">
          {item.current.toLocaleString()} / {item.limit.toLocaleString()}
        </span>
      </div>
      <Progress
        value={percentage}
        className={cn(
          "h-2",
          item.color === "bg-blue-600" && "[&>div]:bg-blue-600",
          item.color === "bg-green-600" && "[&>div]:bg-green-600",
          item.color === "bg-purple-600" && "[&>div]:bg-purple-600"
        )}
      />
    </div>
  );
};

const tabs = [
  {
    id: "billing",
    label: "Billing",
    icon: CreditCard,
    Children: BillingTab,
  },
  {
    id: "usage",
    label: "Usage & Limits",
    icon: BarChart3,
    Children: UsageTab,
  },
];
function page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Billing & Usage</h1>
        <p className="text-muted-foreground">
          Manage your subscription and view usage
        </p>
      </div>
      <Tabs defaultValue={tabs[0].id}>
        <TabsList className="tabs-list">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} className="tabs-trigger" value={tab.id}>
              <Icon icon={tab.icon} />
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <tab.Children />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
export default page;
