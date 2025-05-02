import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { config as authOptions } from "@/lib/auth";

const prisma = new PrismaClient();

// GET /api/campaigns - Get all campaigns for the current user's company
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const companyId = session.user.companyId;
    
    const campaigns = await prisma.campaign.findMany({
      where: { companyId },
      include: {
        steps: {
          include: {
            template: {
              select: {
                id: true,
                name: true,
                subject: true,
              },
            },
          },
          orderBy: {
            sequenceOrder: 'asc',
          },
        },
        _count: {
          select: { clients: true },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    
    return NextResponse.json(campaigns);
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return NextResponse.json({ error: "Failed to fetch campaigns" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// POST /api/campaigns - Create a new campaign
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const body = await request.json();
    const { name, steps } = body;
    
    if (!name) {
      return NextResponse.json({ error: "Campaign name is required" }, { status: 400 });
    }
    
    // Create campaign with steps in a transaction
    const campaign = await prisma.$transaction(async (tx) => {
      // Create the campaign
      const newCampaign = await tx.campaign.create({
        data: {
          name,
          companyId: session.user.companyId || "",
          createdById: session.user.id,
          status: "DRAFT",
        },
      });
      
      // Create steps if provided
      if (steps && steps.length > 0) {
        for (const step of steps) {
          if (!step.templateId) {
            throw new Error("Template ID is required for each step");
          }
          
          await tx.campaignStep.create({
            data: {
              sequenceOrder: step.sequenceOrder,
              delayDays: step.delayDays || 0,
              templateId: step.templateId,
              campaignId: newCampaign.id,
              sendDays: step.sendDays || null,
              sendTimeStart: step.sendTimeStart || null,
              sendTimeEnd: step.sendTimeEnd || null,
            },
          });
        }
      }
      
      // Return the created campaign with steps
      return tx.campaign.findUnique({
        where: { id: newCampaign.id },
        include: {
          steps: {
            include: {
              template: {
                select: {
                  id: true,
                  name: true,
                  subject: true,
                },
              },
            },
            orderBy: {
              sequenceOrder: 'asc',
            },
          },
        },
      });
    });
    
    return NextResponse.json(campaign, { status: 201 });
  } catch (error) {
    console.error("Error creating campaign:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to create campaign";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
