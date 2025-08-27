import ListsTab from "@/components/leads/listsTab";
import StatsCardSkeleton from "@/components/dashboard/StatsCardSkeleton";
import Icon from "@/components/Icon";
import StatsCard from "@/components/StatsCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { leadsStats, leadsTabs } from "@/lib/data/leads";
import { Suspense } from "react";
import CSVUploadTab from "@/components/leads/CSVUploadTab";
import ContactsTab from "@/components/leads/ContactsTab";

function LeadsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lead Hub</h1>
          <p className="text-gray-600 mt-1">
            Manage your lead lists, imports, and contact database
          </p>
        </div>
      </div>
      <Suspense
        fallback={
          <>
            <StatsCardSkeleton />
            <StatsCardSkeleton />
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LeadsStats />
        </div>
      </Suspense>
      <Card>
        <Tabs defaultValue={leadsTabs[0].id}>
          <Suspense fallback={<StatsCardSkeleton />}>
            <CardHeader>
              <TabsList className="tabs-list">
                {leadsTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="tabs-trigger"
                  >
                    <Icon icon={tab.icon} className="mr-2" />
                    {tab.label}
                    {tab.count && <span className="ml-1 ">({tab.count})</span>}
                  </TabsTrigger>
                ))}
              </TabsList>
            </CardHeader>
          </Suspense>
          <CardContent>
            <TabsContent value="lists">
              <Suspense fallback={<StatsCardSkeleton />}>
                <ListsTab />
              </Suspense>
            </TabsContent>
            <TabsContent value="upload">
              <CSVUploadTab />
            </TabsContent>
            <TabsContent value="contacts">
              <ContactsTab />
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}
function LeadsStats() {
  return leadsStats.map((stat) => (
    <StatsCard
      key={stat.title}
      title={stat.title}
      value={stat.value}
      icon={stat.icon}
      color={stat.color}
    />
  ));
}

export default LeadsPage;
