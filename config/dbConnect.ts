import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;

  if (process.env.DB_LOCAL_URI) {
    mongoose.connect(process.env.DB_LOCAL_URI);
  }
};

export default dbConnect;
