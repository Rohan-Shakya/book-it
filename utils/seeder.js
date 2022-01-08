const Room = require("../models/room");
const mongoose = require("mongoose");
const rooms = require("../data/rooms.json");

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All Rooms are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

if (mongoose.connection.readyState >= 1) return;

if ("mongodb://localhost:27017/bookit") {
  mongoose.connect("mongodb://localhost:27017/bookit");
  seedRooms();
}
