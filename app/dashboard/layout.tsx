import React from "react";
import { getServerSession } from "next-auth";
import { config as authOptions } from "@/lib/auth";
import { DashboardLayout } from "@/components/layout/DashboardLayout"; // Renamed to avoid conflict
import { AuthProvider } from "@/context/AuthContext";

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <AuthProvider>
        <DashboardLayout>{children}</DashboardLayout>
    </AuthProvider>
  );
}
