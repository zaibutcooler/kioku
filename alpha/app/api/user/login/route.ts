import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  try {
    await connectDB();

    const user = await User.findOne({ username });
    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid Username" }), {
        status: 400,
      });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return new Response(JSON.stringify({ message: "Invalid password" }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
