import dotenv from "dotenv";
dotenv.config();
import connectDB from "./src/config/db.js";
import cors from "cors";
import AuthRouter from "./src/routers/authRouter.js";
import PublicRouter from "./src/routers/publicRouter.js"

import morgan from "morgan";
import express from "express";
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/public",PublicRouter)
app.get("/", (req, res) => {
  console.log("SERVER IS RUNNING");
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal server error";
  const StatusCode = err.statusCode || 500;
  res.status(StatusCode).json({ message: ErrorMessage });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started at Port:", port);
  connectDB();
});
