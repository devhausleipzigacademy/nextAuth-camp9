import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import { db } from "./db";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET!,
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async session({ session, user, token }) {
      //console.log("session", session);
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      //console.log("jwt", token);
      return token;
    },
  },
};
