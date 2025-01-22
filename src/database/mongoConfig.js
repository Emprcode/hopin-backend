import mongoose from "mongoose";
import { mongoURL } from "../lib/config.js";

export const connectDB = async () => {
  const conn = await mongoose.connect(mongoURL);
  conn && console.log("Mongo Connected");
};
