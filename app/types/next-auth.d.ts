import { DefaultSession, DefaultUser } from "next-auth";
// To make custom fields available on the JWT token type
import { JWT as DefaultJWT } from "next-auth/jwt";
// Import the generated Prisma User type and UserRole enum for type safety
// Adjust the import path based on where your generated client types are located,
// usually node_modules/.prisma/client or similar if using a types alias.
import { User as PrismaUser, UserRole } from "@prisma/client";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: PrismaUser["id"];
      role?: PrismaUser["role"];
      companyId?: PrismaUser["companyId"];
      username: PrismaUser["username"];
      name: PrismaUser["name"];
    } & DefaultSession["user"]; // Include default fields like name, email, image
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends DefaultUser {
    // Explicitly add the fields from PrismaUser that you expect
    // to be present on the user object in callbacks (excluding sensitive/large relation data)
    id: PrismaUser["id"];
    role?: PrismaUser["role"];
    companyId?: PrismaUser["companyId"];
    name?: PrismaUser["name"];
    username?: PrismaUser["username"];
    emailVerified?: PrismaUser["emailVerified"]; // Include if needed
    createdAt?: PrismaUser["createdAt"]; // Include if needed
    updatedAt?: PrismaUser["updatedAt"]; // Include if needed
    passwordHash?: PrismaUser["passwordHash"]; // Include if needed
    // DefaultUser already provides name, email, image with appropriate nullability
  }

  /**
   * Usually contains information about the provider being used
   * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
   */
  // interface Account {} // Not needed for session/JWT typing in this case
  /** The OAuth profile returned from your provider */
  // interface Profile {} // Not needed for session/JWT typing in this case
}

declare module "next-auth/jwt" {
  /**
   * Returned inside `callbacks.jwt`.
   * This interface is for the *type* of the token object
   * used internally by next-auth, not the cookie value.
   */
  interface JWT extends DefaultJWT {
    id: PrismaUser["id"]; // Prisma User ID is cuid (string)
    role?: UserRole; // Your custom UserRole enum
    companyId?: PrismaUser["companyId"]; // Your custom company relation ID (Int in db, number in TS)
    username: PrismaUser["username"]; // Your custom username field (String? in db, string | null in TS)
    // Default fields like name, email are usually already here.
    // The 'image' field from the User model is typically mapped to the 'picture' claim in the JWT.
    picture?: string | null; // Add the 'picture' claim type for the image
  }
}
