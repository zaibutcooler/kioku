import User, { UserType } from "@/models/User";
import bcrypt from "bcrypt";
import { connectDB } from "@/utils/connectDB";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectDB();
        const user = await User.findOne({
          username: credentials?.username,
        });

        if (!credentials?.password || !user) {
          return null;
        }
        const validPassword = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (user && validPassword) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token._doc as any;

      return { ...session };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/",
  },
};
