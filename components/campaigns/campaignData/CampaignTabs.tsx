import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { campaignLeads, sequenceSteps } from "@/lib/data/campaigns";
import { BarChart3, Mail, Users } from "lucide-react";

const tabs = [
  {
    id: "sequence",
    label: "Sequence",
    icon: Mail,
    count: sequenceSteps.length,
  },
  { id: "stats", label: "Stats", icon: BarChart3 },
  { id: "leads", label: "Leads", icon: Users, count: campaignLeads.length },
];
function CampaignTabs({ children }: { children?: React.ReactNode }) {
  return (
    <Tabs defaultValue="sequence" className="w-full ">
      <TabsList className="tabs-list">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <TabsTrigger key={tab.id} value={tab.id} className="tabs-trigger">
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.count && (
                <span className="ml-1 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                  {tab.count}
                </span>
              )}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {children}
    </Tabs>
  );
}
export default CampaignTabs;
