import express from "express";
import { Protect } from "../middlewares/authMiddleware";
import Razorpay from "razorpay";
const router = express.Router();

router.get("/getRazorpayKey" , Protect , Razor)
router.post("/createOrder", Protect , RazorPayCreateOrder);
router.post("/verifyPayment",Protect , RazorPayVerifyPayment);