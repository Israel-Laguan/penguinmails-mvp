import Header from "@/components/layout/DashboardHeader";
import AppSideBar from "@/components/layout/Sidebar";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSideBar />
        <SidebarInset>
          <Header />
          <main className="flex-1 p-8">{children}</main>
        </SidebarInset>
      </SidebarProvider>{" "}
    </ProtectedRoute>
  );
}
