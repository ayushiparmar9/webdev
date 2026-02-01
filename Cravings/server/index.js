
import connectDB from "./src/config/db.js";
import cors from "cors";
import AuthRouter from "./src/routers/authRouter.js";
import PublicRouter from "./src/routers/publicRouter.js"
import UserRouter from "./src/routers/userRouter.js"
import cloudinary from "./src/config/cloudinary.js";

import morgan from "morgan";
import cookieParser from "cookie-parser";
import express from "express";
const app = express();
app.use(cors({ origin: "http://localhost:5173",credentials:true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/public",PublicRouter)
app.use("/user",UserRouter);
app.get("/", (req, res) => {
  console.log("SERVER IS RUNNING");
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal server error";
  const StatusCode = err.statusCode || 500;
  res.status(StatusCode).json({ message: ErrorMessage });
});
const port = process.env.PORT || 5000;
app.listen(port, async() => {
  console.log("server started at Port:", port);
  connectDB();
try { 
  const res = await cloudinary.api.ping()
  //to check if  i am connected to cloudinary or not
  console.log("cloudinary api is working" ,res)
} catch (error) {
  console.error("error connecting to the cloudinary api",error)
}


});
