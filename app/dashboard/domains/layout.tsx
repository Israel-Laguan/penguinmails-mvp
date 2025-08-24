import OverviewCards from "@/components/domains/overview-cards";
import TabTrigger from "@/components/domains/TabTrigger";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { tabs } from "@/lib/data/domains.mock";
import { Suspense } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-8 ">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-900">
          Domains & Mailboxes
        </h1>
        <p className="text-gray-600 ">
          Manage your sending domains, mailboxes, and warmup processes
        </p>
      </div>
      <Suspense>
        <OverviewCards />
      </Suspense>
      <Card>
        <Tabs defaultValue={tabs.at(0)?.id} className="w-full">
          <CardHeader>
            <TabsList className="tabs-list">
              {tabs.map((tab) => (
                <TabTrigger
                  key={tab.id}
                  href={`/dashboard/domains/${tab.id}`}
                  id={tab.id}
                >
                  <tab.icon className="h-4 w-4 mr-2 inline-block" />
                  {tab.label}
                  {tab.count > 0 && (
                    <span className="ml-2 text-sm ">({tab.count})</span>
                  )}
                </TabTrigger>
              ))}
            </TabsList>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Tabs>
      </Card>
    </div>
  );
}
export default Layout;
