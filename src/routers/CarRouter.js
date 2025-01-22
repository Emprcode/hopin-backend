import express from "express";
import { addCar, deleteCar, getAllCars } from "../model/car/CarModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await addCar(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "Car added successfully",
        })
      : res.json({
          status: "error",
          message: "error",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllCars();
    res.json({
      status: "success",
      message: "fetched all cars",
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = await deleteCar(_id);
    result._id
      ? res.json({
          status: "success",
          message: "Issue deleted successfully",
          result,
        })
      : res.json({
          status: "error",
          message: "error",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
