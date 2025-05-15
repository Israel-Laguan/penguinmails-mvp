import { prisma } from "@/lib/prisma"
import { Campaign, CampaignResponse } from "@/types/campaign"

export async function GET(campaignId: number): Promise<Response> {
  const data = await prisma.$transaction(async (tx) => {
    const campaign = await tx.campaign.findUnique({
      where: { id: campaignId },
      include: {
        clients: true,
        emailEvents: {
          select: {
            type: true,
            timestamp: true
          }
        }
      }
    }) as CampaignResponse;

    if (!campaign) {
      return null;
    }

    // Map DB data to frontend format
    const totalRecipients = campaign.clients.length;
    const events = campaign.emailEvents;
    
    const sent = events.filter(e => e.type === 'SENT').length;
    const opens = events.filter(e => e.type === 'OPENED').length;
    const clicks = events.filter(e => e.type === 'CLICKED').length;
    const replies = events.filter(e => e.type === 'REPLIED').length;
    const lastActivity = events.length > 0 
      ? new Date(Math.max(...events.map(e => e.timestamp.getTime())))
      : campaign.updatedAt;

    const mapped: Campaign = {
      id: campaign.id.toString(),
      name: campaign.name,
      status: campaign.status,
      recipients: { 
        sent, 
        total: totalRecipients 
      },
      opens: { 
        total: opens, 
        rate: sent > 0 ? (opens / sent) * 100 : 0 
      },
      clicks: { 
        total: clicks, 
        rate: sent > 0 ? (clicks / sent) * 100 : 0 
      },
      replies: { 
        total: replies, 
        rate: sent > 0 ? (replies / sent) * 100 : 0 
      },
      lastUpdated: formatRelativeTime(lastActivity)
    };

    return mapped;
  });

  if (!data) {
    return new Response(null, { status: 404 });
  }

  return Response.json(data);
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / 1000; // in seconds

  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;
  return `${Math.floor(diff / 604800)} weeks ago`;
}
