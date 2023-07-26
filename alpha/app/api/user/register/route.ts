import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  try {
    await connectDB();

    const userExists = await User.findOne({ username });
    if (userExists) {
      return new Response(
        JSON.stringify({ message: "Username Already exists" }),
        {
          status: 401,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
