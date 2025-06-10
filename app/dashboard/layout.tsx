import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout"; // Renamed to avoid conflict
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </ProtectedRoute>
  );
}
