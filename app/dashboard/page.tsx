import { getServerSession } from "next-auth/next";
import { config as authOptions } from "@/lib/auth";
import { getDashboardMockDataAction } from "@/lib/actions/dashboardActions";
import { signOut } from "next-auth/react";
import DashboardContent from "./DashboardContent";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user) {
    return <div>Unauthorized</div>;
  }

  const companyId = session.user.companyId;
  if (!companyId) {
    await signOut({ callbackUrl: '/auth/signin' });
    return null;
  }

  const dashboardData = await getDashboardMockDataAction(companyId);

  return <DashboardContent dashboardData={dashboardData} />;
}
