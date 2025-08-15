import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CreditCard } from "lucide-react";

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

function page() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Billing & Usage</h1>
        <p className="text-muted-foreground">
          Manage your subscription and view usage
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div>
            <h4 className="font-medium">Professional Plan</h4>
            <p className="text-sm text-muted-foreground">
              $99/month • Billed annually
            </p>
          </div>
          <Button variant="outline">Change Plan</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {usageItems.map((item, index) => (
              <UsageProgressItem key={index} item={item} />
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-gray-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-500">Expires 12/25</p>
            </div>
          </div>
          <Button variant={"outline"}>Update</Button>
        </CardContent>
      </Card>
      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
export default page;
