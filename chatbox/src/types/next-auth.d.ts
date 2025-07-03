import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

// 👇 Your CustomUser interface
interface CustomUser {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string | null;
  token?: string | null;
}

// 👇 Extend NextAuth Session and User
declare module "next-auth" {
  interface Session {
    user?: CustomUser;
  }

  interface User extends CustomUser {}
}

// 👇 Extend JWT object
declare module "next-auth/jwt" {
  interface JWT {
    user?: CustomUser;
  }
}
