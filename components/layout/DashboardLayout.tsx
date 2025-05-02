import React from "react";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

