import { connectDB } from "@/utils/connectDB";
import Model from "@/models/personal/Track";
import User from "@/models/User";
import { subDays, startOfDay, endOfDay } from "date-fns";

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const userID = searchParams.get("userID");
    const day = searchParams.get("day");
    const daysAgo = parseInt(day ? day : "");

    if (userID && Number.isInteger(daysAgo)) {
      const startDate = startOfDay(subDays(new Date(), daysAgo));
      const endDate = endOfDay(new Date());

      const items = await Model.find({
        user: userID,
        created: { $gte: startDate, $lte: endDate },
      });

      return new Response(JSON.stringify(items), {
        status: 200,
      });
    }

    if (userID) {
      const items = await Model.find({ user: userID });
      return new Response(JSON.stringify(items), {
        status: 200,
      });
    }

    return new Response(JSON.stringify({ message: "Invalid parameters" }), {
      status: 400,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
