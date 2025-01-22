import express from "express";
import { carBooking, getCarBooking } from "../model/booking/BookingModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await carBooking(req.body);
    result._id
      ? res.json({
          status: "success",
          message:
            "Your request has been sent successfully, we will contact you sortly!",
        })
      : res.json({
          status: "error",
          message: "Unable to send your request, Please try again later!",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
