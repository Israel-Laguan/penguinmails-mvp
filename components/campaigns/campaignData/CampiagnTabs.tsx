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
function CampiagnTabs({ children }: { children?: React.ReactNode }) {
  return (
    <Tabs defaultValue="sequence" className="w-full ">
      <TabsList className="flex space-x-8 px-0 bg-transparent border-b border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="py-4 px-1 
                data-[state=active]:shadow-none
                data-[state=inactive]:border-none
                data-[state=active]:border-b-2 
                border-x-0 border-t-0
                rounded-none
                font-medium text-sm transition-colors flex items-center space-x-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 border-transparent text-gray-500 hover:text-gray-700  bg-transparent"
            >
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
export default CampiagnTabs;
