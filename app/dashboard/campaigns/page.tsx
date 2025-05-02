// import { getServerSession } from "next-auth/next";
// import { config as authOptions } from "@/lib/auth";
import { getCampaignsDataAction } from "@/lib/actions";
// import { signOut } from "next-auth/react";
import CampaignsContent from "./CampaignsContent";

export default async function CampaignsPage() {
  // const session = await getServerSession(authOptions);

  // if (!session || !session.user) {
  //   return <div>Unauthorized</div>;
  // }

  // const companyId = session.user.companyId;
  // if (!companyId) {
  //   await signOut({ callbackUrl: '/auth/signin' });
  //   return null;
  // }

  const campaignsData = await getCampaignsDataAction('companyId');
  
  return <CampaignsContent campaignsData={campaignsData} />;
}
