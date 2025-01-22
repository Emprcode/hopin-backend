import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    gear: {
      type: String,
      required: true,
    },
    manufacture: {
      type: String,
      required: true,
    },
    seat: {
      type: Number,
      required: true,
    },
    mpg: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    // userId: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   requred: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Car", CarSchema);
