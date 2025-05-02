import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";

import { Session, User } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { JWT } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Use the Prisma User type for the fetched user
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          // Select the fields needed for the Session and JWT,
          // plus passwordHash for validation.
          // Ensure these fields match the ones defined in your types/next-auth.d.ts
          select: {
            id: true,
            email: true,
            passwordHash: true, // Keep for validation
            // name: true,
            // image: true,
            // username: true,
            role: true,
            companyId: true,
            // emailVerified: true,
            createdAt: true,
            updatedAt: true,
            // Add other fields here if they are part of your User type in types/next-auth.d.ts
          },
        });

        // Explicitly check for user existence and that passwordHash is set (for credentials users)
        if (!user || typeof user.passwordHash !== "string") {
          // User not found or passwordHash is not set (e.g., social login user trying credentials)
          return null;
        }

        // Compare hashed password
        const isValid = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );

        if (isValid) {
          const authorizedUser = {
            ...user,
            passwordHash: undefined, // Remove password hash from the returned user object
          };
          return authorizedUser as User;
        } else {
          return null; // Passwords do not match
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // Redirect users to /login if they need to sign in
    // error: '/auth/error', // Error code passed in query string as ?error=
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    // Include user.id and potentially role/companyId in the JWT token
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.companyId = user.companyId; // Ensure companyId is a string
      }
      return token;
    },
    // Include user.id and potentially role/companyId in the session object
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.companyId = token.companyId;
      }
      return session;
    },
  },
} satisfies NextAuthOptions;

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}
