import express from "express";
import {
  UserRegister,
  UserLogin,
  UserLogout,
  UserGenOtp,
  UserVerifyOtp,
  UserForgetPassword
} from "../controllers/authController.js";
import { OtpProtect } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.get("/logout", UserLogout);
router.post("/genOtp",UserGenOtp);
router.post("/verifyOtp", UserVerifyOtp);
router.post("/forgetPasword",OtpProtect,UserForgetPassword);
export default router;
