import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { config as authOptions } from "@/lib/auth";

// GET /api/clients - Get all clients for the current user's company
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const companyId = session.user.companyId;
    
    const clients = await prisma.client.findMany({
      where: {
        companyId: companyId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    return NextResponse.json({ error: "Failed to fetch clients" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// POST /api/clients - Create a new client
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const companyId = session.user.companyId;
    const body = await request.json();
    const { email, firstName, lastName, notes } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if client with this email already exists in the company
    const existingClient = await prisma.client.findFirst({
      where: {
        companyId,
        email,
      },
    });

    if (existingClient) {
      return NextResponse.json({ error: "A client with this email already exists" }, { status: 409 });
    }

    // Create new client
    const client = await prisma.client.create({
      data: {
        email,
        firstName: firstName || null,
        lastName: lastName || null,
        notes: notes || null,
        company: {
          connect: {
            id: companyId,
          },
        },
      },
    });

    return NextResponse.json(client, { status: 201 });
  } catch (error) {
    console.error("Error creating client:", error);
    return NextResponse.json({ error: "Failed to create client" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
