import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { prisma } from "./prisma";

// Pass both session and user models as required by v2
const adapter = new PrismaAdapter(
  prisma.session,  // First argument: session model
  prisma.user      // Second argument: user model
);

export const auth = new Lucia(
  adapter,
  {
    sessionCookie: {
      attributes: {
        secure: process.env.NODE_ENV === "production"
      }
    }
  }
);

export type Auth = typeof auth;