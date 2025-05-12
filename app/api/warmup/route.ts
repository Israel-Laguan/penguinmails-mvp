import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { getServerSession } from "next-auth/next";
// import { config as authOptions } from "@/lib/auth";

// GET /api/warmup - Get warmup data for the current user's company
export async function GET() {
  try {
    // const session = await getServerSession(authOptions);
    
    // if (!session || !session.user) {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    const companyId = 1//session.user.companyId;
    console.log("Company ID:", companyId);

    // For now return mock data, but structured for future DB implementation
    const warmupData = {
      accounts: [
        {
          id: 1,
          email: "john@example.com",
          status: "Active",
          sentToday: 39,
          inboxRate: 97.5,
          spamRate: 2.5,
          reputation: 90,
          dailyLimit: 45,
          daysActive: 8,
        },
        {
          id: 2,
          email: "sales@example.com",
          status: "Active",
          sentToday: 68,
          inboxRate: 95.5,
          spamRate: 4.5,
          reputation: 85,
          dailyLimit: 70,
          daysActive: 14,
        },
        {
          id: 3,
          email: "marketing@example.com",
          status: "Paused",
          sentToday: 1,
          inboxRate: 92.0,
          spamRate: 8.0,
          reputation: 78,
          dailyLimit: 30,
          daysActive: 6,
        }
      ],
      stats: [
        {
          name: "Apr 20",
          volume: 10,
          inbox: 10,
          spam: 0,
          reputation: 72,
        },
        {
          name: "Apr 21",
          volume: 15,
          inbox: 14,
          spam: 1,
          reputation: 75,
        },
        {
          name: "Apr 22",
          volume: 20,
          inbox: 19,
          spam: 1,
          reputation: 77,
        },
        {
          name: "Apr 23",
          volume: 25,
          inbox: 24,
          spam: 1,
          reputation: 80,
        },
        {
          name: "Apr 24",
          volume: 30,
          inbox: 29,
          spam: 1,
          reputation: 83,
        },
        {
          name: "Apr 25",
          volume: 35,
          inbox: 34,
          spam: 1,
          reputation: 86,
        },
        {
          name: "Apr 26",
          volume: 40,
          inbox: 39,
          spam: 1,
          reputation: 88,
        },
        {
          name: "Apr 27",
          volume: 45,
          inbox: 44,
          spam: 1,
          reputation: 90,
        }
      ]
    };

    return NextResponse.json(warmupData);
  } catch (error: any) {
    console.error("Warmup Data Error:", error);
    return NextResponse.json(
      { error: error.message || "An internal server error occurred" }, 
      { status: 500 }
    );
  }
}