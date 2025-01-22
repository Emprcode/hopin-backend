import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    pickUpDate: {
      type: String,
      required: true,
    },
    dropOffDate: {
      type: String,
      required: true,
    },
    pickUpTime: {
      type: String,
      required: true,
    },
    dropOffTime: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CarBooking", BookingSchema);
