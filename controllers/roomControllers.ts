import type { NextApiRequest, NextApiResponse } from "next";
import Room from "../models/room";

const allRooms = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    success: true,
    message: "All Rooms",
  });
};

// Create new room => /api/rooms
const newRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.create(req.body);

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { allRooms, newRoom };
