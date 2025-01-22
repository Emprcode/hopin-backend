import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "./src/database/mongoConfig.js";
import CarRouter from "./src/routers/CarRouter.js";
import CarBookingRouter from "./src/routers/CarBookingRouter.js";

const app = express();

const PORT = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//database
connectDB();
//routes
app.use("/api/v1/cars", CarRouter);
app.use("/api/v1/booking", CarBookingRouter);

app.use("/", (req, res, next) => {
  res.json({
    status: "success",
    message: "success",
  });
});
//global error handler
app.use((error, req, res, next) => {
  const statusCode = error.errorCode || 404;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server running at http://localhost:${PORT}`);
});
