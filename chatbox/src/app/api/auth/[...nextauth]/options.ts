import { Account, AuthOptions, ISODateString, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import { LOGIN_URL } from "@/lib/apiAuthRoutes";

export interface CustomSession {
  user?: CustomUser;
  expires: ISODateString;
}

export interface CustomUser {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string | null;
  token?: string | null;
}



export const authOptions: AuthOptions = {
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        const payload = {
          name: user.name,
          email: user.email,
          oauth_id: account?.providerAccountId,
          provider: account?.provider,
          image: user.image,
        };
        console.log(payload);
        const { data } = await axios.post(LOGIN_URL, payload);
        
        (user as CustomUser).id = data?.user?.id?.toString() ?? null;
        (user as CustomUser).token = data?.user?.token ?? null;

        return true;
      } catch (error) {
        console.error("Backend login failed:", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};
