import type { NextApiRequest, NextApiResponse } from "next";

const allRooms = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    success: true,
    message: "All Rooms",
  });
};

export { allRooms };
