import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const SALT_ROUNDS = 10;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      email, 
      password, 
      name, 
      companyName,
      businessId, 
      referralCode,
      planType = 'FREE'
    } = body;

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" }, 
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" }, 
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" }, 
        { status: 409 }
      );
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    // Handle both new company creation and joining existing company
    const newUser = await prisma.$transaction(async (tx) => {
      let companyId: number;

      if (businessId) {
        // Joining existing company
        const existingCompany = await tx.company.findUnique({
          where: { id: parseInt(businessId) },
        });

        if (!existingCompany) {
          throw new Error("Company not found");
        }

        // Here you would validate the referral code
        // This is a placeholder - implement your own referral code validation
        if (!referralCode) {
          console.error("Referral code is optional to gain benefits");
          // throw new Error("Referral code is required to join an existing company");
        }

        companyId = existingCompany.id;
      } else {
        // Creating new company
        if (!companyName) {
          throw new Error("Company name is required for new company");
        }

        const company = await tx.company.create({
          data: {
            name: companyName,
            planType: planType,
          },
        });

        companyId = company.id;
      }

      const user = await tx.user.create({
        data: {
          email,
          passwordHash,
          name,
          companyId,
          role: businessId ? 'MEMBER' : 'ADMIN', // First user of new company is admin
        },
      });

      return user;
    });

    // Don't return password hash
    const { passwordHash: _, ...userWithoutPassword } = newUser;
    return NextResponse.json(userWithoutPassword, { status: 201 });

  } catch (error: any) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: error.message || "An internal server error occurred" }, 
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

