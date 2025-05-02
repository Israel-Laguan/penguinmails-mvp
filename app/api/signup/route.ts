import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const SALT_ROUNDS = 10;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName, companyName } = body;

    // Basic validation
    if (!email || !password || !companyName) {
      return NextResponse.json({ error: "Email, password, and company name are required" }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    // Create company and user in a transaction
    // @ts-ignore
    const newUser = await prisma.$transaction(async (tx) => {
      const company = await tx.company.create({
        data: {
          name: companyName,
          // planType: 'FREE', // Default is set in schema
        },
      });

      const user = await tx.user.create({
        data: {
          email,
          passwordHash,
          // name,
          companyId: company.id,
          // role: 'MEMBER', // Default is set in schema
        },
      });

      return user;
    });

    // Don't return password hash
    const { passwordHash: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(userWithoutPassword, { status: 201 });

  } catch (error) {
    console.error("Signup Error:", error);
    // Check for specific Prisma errors if needed, e.g., unique constraint violation
    // if (error instanceof Prisma.PrismaClientKnownRequestError) { ... }
    return NextResponse.json({ error: "An internal server error occurred" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

