import { connectDB } from "@/utils/connectDB";
import Model from "@/models/personal/Track";
import User from "@/models/User";
import { startOfDay, endOfDay } from "date-fns";

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const userID = searchParams.get("userID");
    const day = searchParams.get("day");

    if (userID && day) {
      const requestedDate = new Date(day);
      const startDate = startOfDay(requestedDate);
      const endDate = endOfDay(requestedDate);

      const items = await Model.find({
        user: userID,
        created: { $gte: startDate, $lte: endDate },
      });

      return new Response(JSON.stringify(items), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Invalid parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
