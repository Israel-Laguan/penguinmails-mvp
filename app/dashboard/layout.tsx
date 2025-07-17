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
    // <ProtectedRoute>
    <SidebarProvider>
      <AppSideBar />
      <SidebarInset>
        <Header />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>{" "}
      </SidebarInset>
    </SidebarProvider>
    // </ProtectedRoute>
  );
}
