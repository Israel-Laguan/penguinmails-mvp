import Icon from "@/components/Icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, CreditCard } from "lucide-react";
import BillingTab from "./Billing-Tab";
import UsageTab from "./usage-tab";

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
