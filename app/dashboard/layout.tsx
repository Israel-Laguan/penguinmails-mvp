import Header from "@/components/layout/DashboardHeader";
import AppSideBar from "@/components/layout/Sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset className="bg-sidebar md:peer-data-[variant=inset]:shadow-none gap-5">
        <div className="bg-white rounded-lg shadow-sm">
          <Header />
        </div>
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-lg shadow-sm">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
