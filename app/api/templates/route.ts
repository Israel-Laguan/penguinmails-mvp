import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { config as authOptions } from "@/lib/auth";

// GET /api/templates - Get all templates for the current user's company
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const companyId = session.user.companyId;
    
    const templates = await prisma.template.findMany({
      where: {
        companyId: companyId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(templates);
  } catch (error) {
    console.error("Error fetching templates:", error);
    return NextResponse.json({ error: "Failed to fetch templates" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// POST /api/templates - Create a new template
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const companyId = session.user.companyId;
    const userId = session.user.id;
    const body = await request.json();
    const { name, subject, bodyHtml } = body;

    // Validate required fields
    if (!name || !subject || !bodyHtml || !companyId) {
      return NextResponse.json({ error: "Name, subject, body and company are required" }, { status: 400 });
    }

    // Create new template
    const template = await prisma.template.create({
      data: {
        name,
        subject,
        bodyHtml,
        companyId,
        createdById: userId, // Link template to the user who created it
      },
    });

    return NextResponse.json(template, { status: 201 });
  } catch (error) {
    console.error("Error creating template:", error);
    return NextResponse.json({ error: "Failed to create template" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
