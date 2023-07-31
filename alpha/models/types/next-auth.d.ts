import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      username: string;
      email: string;
      password: string;
      created: string | Date;
    };
  }
}
