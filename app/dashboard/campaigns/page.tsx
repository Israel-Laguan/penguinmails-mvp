import CampaignsContent from "./content";
import { mockCampaigns } from "@/components/campaigns/mock-data";
// import { prisma } from "@/lib/prisma";
// import { notFound } from "next/navigation";
// import { EmailEventType } from "@/app/api/generated/prisma";

const mockData = {
  summary: {
    totalCampaigns: mockCampaigns.length,
    activeCampaigns: mockCampaigns.filter(c => c.status === 'ACTIVE').length,
    emailsSent: mockCampaigns.reduce((acc, c) => 
      acc + c.emailEvents.filter(e => e.type === 'SENT').length, 0),
    totalReplies: mockCampaigns.reduce((acc, c) => 
      acc + c.emailEvents.filter(e => e.type === 'REPLIED').length, 0),
  },
  campaigns: mockCampaigns
};

// async function getCampaignsData() {
//   const campaigns = await prisma.campaign.findMany({
//     include: {
//       clients: true,
//       emailEvents: {
//         select: {
//           type: true,
//           timestamp: true
//         }
//       }
//     }
//   });

//   if (!campaigns) {
//     notFound();
//   }

//   // Calculate summary statistics
//   const summary = {
//     totalCampaigns: campaigns.length,
//     activeCampaigns: campaigns.filter(c => c.status === 'ACTIVE').length,
//     emailsSent: campaigns.reduce((acc, c) => 
//       acc + c.emailEvents.filter(e => e.type === EmailEventType.SENT).length, 0),
//     totalReplies: campaigns.reduce((acc, c) => 
//       acc + c.emailEvents.filter(e => e.type === EmailEventType.REPLIED).length, 0),
//   };

//   return {
//     summary,
//     campaigns
//   };
// }

export default function CampaignsPage() {
  // const data = await getCampaignsData();
  return <CampaignsContent campaignsData={mockData} />;
}
