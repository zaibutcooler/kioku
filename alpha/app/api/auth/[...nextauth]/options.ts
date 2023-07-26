import User from "@/models/User";
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
        const user = await User.findOne({ username: credentials?.username });

        if (!credentials?.password || !user) {
          return null;
        }
        const validPassword = await bcrypt.compare(
          credentials?.password,
          user.password
        );
        if (user && validPassword) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/",
  },
};
