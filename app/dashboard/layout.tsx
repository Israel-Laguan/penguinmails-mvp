import React from "react";
import { getServerSession } from "next-auth";
import { config as authOptions } from "@/lib/auth";
import SessionProvider from "./SessionProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import { DashboardLayout } from "@/components/layout/DashboardLayout"; // Renamed to avoid conflict

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <SessionProvider session={session}>
      <ProtectedRoute>
        <DashboardLayout>{children}</DashboardLayout>
      </ProtectedRoute>
    </SessionProvider>
  );
}
