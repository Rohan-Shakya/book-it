import type { NextApiRequest, NextApiResponse } from "next";
import Room from "../models/room";

// Get all rooms => /api/rooms
const allRooms = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error: any) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
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

// Get a single room => /api/rooms/:id
const getSingleRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      res.status(404).json({
        success: true,
        message: "Room not found with this ID",
      });
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error: any) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};

// Update a single room => /api/rooms/:id
const updateRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      res.status(404).json({
        success: true,
        message: "Room not found with this ID",
      });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error: any) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};

// Delete a single room => /api/rooms/:id
const deleteRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      res.status(404).json({
        success: true,
        message: "Room not found with this ID",
      });
    }

    await room.remove();
    res.status(200).json({
      success: true,
      message: "Room is deleted.",
    });
  } catch (error: any) {
    res.status(400).json({
      success: true,
      message: error.message,
    });
  }
};

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
