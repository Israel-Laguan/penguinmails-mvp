import { NextResponse } from "next/server";
import { PrismaClient, EmailEventType } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { config as authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET /api/analytics - Get analytics data for the current user's company
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const companyId = session.user.companyId;
    
    // Get all campaigns for the company
    const campaigns = await prisma.campaign.findMany({
      where: { companyId },
      select: { id: true, name: true },
    });
    
    // Get event counts for each campaign
    const campaignStats = await Promise.all(
      campaigns.map(async (campaign) => {
        const sentCount = await prisma.emailEvent.count({
          where: {
            campaignId: campaign.id,
            type: EmailEventType.SENT,
          },
        });
        
        const openedCount = await prisma.emailEvent.count({
          where: {
            campaignId: campaign.id,
            type: EmailEventType.OPENED,
          },
        });
        
        const clickedCount = await prisma.emailEvent.count({
          where: {
            campaignId: campaign.id,
            type: EmailEventType.CLICKED,
          },
        });
        
        const bouncedCount = await prisma.emailEvent.count({
          where: {
            campaignId: campaign.id,
            type: EmailEventType.BOUNCED,
          },
        });
        
        const unsubscribedCount = await prisma.emailEvent.count({
          where: {
            campaignId: campaign.id,
            type: EmailEventType.UNSUBSCRIBED,
          },
        });
        
        return {
          id: campaign.id,
          name: campaign.name,
          sent: sentCount,
          opened: openedCount,
          clicked: clickedCount,
          bounced: bouncedCount,
          unsubscribed: unsubscribedCount,
        };
      })
    );
    
    return NextResponse.json(campaignStats);
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json({ error: "Failed to fetch analytics data" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// POST /api/analytics/events - Record a new email event
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const body = await request.json();
    const { type, campaignId, clientId, campaignStepId, metadata } = body;
    
    // Validate required fields
    if (!type || !campaignId || !clientId) {
      return NextResponse.json({ error: "Type, campaignId, and clientId are required" }, { status: 400 });
    }
    
    // Validate that the campaign belongs to the user's company
    const campaign = await prisma.campaign.findFirst({
      where: {
        id: campaignId,
        companyId: session.user.companyId,
      },
    });
    
    if (!campaign) {
      return NextResponse.json({ error: "Campaign not found or access denied" }, { status: 404 });
    }
    
    // Find the campaign-client relationship
    const campaignClient = await prisma.campaignClient.findUnique({
      where: {
        campaignId_clientId: {
          campaignId,
          clientId,
        },
      },
    });
    
    // Create the email event
    const emailEvent = await prisma.emailEvent.create({
      data: {
        type,
        campaignId,
        clientId,
        campaignStepId,
        campaignClientId: campaignClient?.campaignId,
        metadata,
      },
    });
    
    return NextResponse.json(emailEvent, { status: 201 });
  } catch (error) {
    console.error("Error creating email event:", error);
    return NextResponse.json({ error: "Failed to create email event" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
