import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import {genOtpToken, genToken } from "../utils/authToken.js";
import OTP from "../models/otpModel.js";
import { sendOTPEmail } from "../utils/emailService.js";
export const UserRegister = async (req, res, next) => {
  try {
    //accept data from frontend
    const { fullName, email, mobileNumber,password,role } = req.body;
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("ALL feilds required");
      error.statusCode = 400;
      return next(error);
    }
    //check fro duplicate
    const existingUser = await User.findOne({email});
    if (existingUser) {
      const error = new Error("email already registered");
      error.statusCode = 409;
      return next(error);
    }
    //encrpt password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const photoURL = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    const photo = {
      url: photoURL,
    };
    //save data tomdatabase 
    const newUser = await User.create({
        fullName ,
        email,
        mobileNumber,
        password:hashedpassword,
        role,
        photo,
        

    });
    //send dresponse to frontend
    console.log(newUser);
    res.status(201).json({message:"Registration successful"});


  } catch (error) {
    next(error);
  }
};
export const UserLogin = async (req, res, next ) => {
  try {
    //fetch data from frontend
    const { email, password ,role} = req.body;
    if (!email || !password) {
      const error = new Error("ALL feilds required");
      error.statusCode = 400;
      return next(error);
    }
    
    //check if user is regited or not
    const existingUser = await User.findOne({email});
    console.log(existingUser);
    if (!existingUser) {
      const error = new Error("email not registered");
      error.statusCode = 401;
      return next(error);
    }
//verify the password 
const isVerified=await bcrypt.compare(password , existingUser.password);
if(!isVerified){
    const error = new Error("password didn't match");
      error.statusCode = 401;
      return next(error);
}
//send messsage to frontend
//token generation willl be done here
genToken(existingUser , res);
res.status(200).json({message:'login successfull', data:existingUser});
//End



  } catch (error) {
    next(error);
  }
};
export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({message:'logout successfull'});
    res.clearCookie("parleG");
  } catch (error) {
    next(error);
  }
};
export const UserGenOtp = async(req,res,next)=>{
  try {
    //Fetch Data from Frontend
    const { email } = req.body;

    //verify that all data exist
    if (!email) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    //Check if user is registred or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
    }

    const otp = Math.floor(Math.random() * 1000000).toString();
    console.log(typeof otp);

    //encrypt the otp
    const salt = await bcrypt.genSalt(10);
    const hashOTP = await bcrypt.hash(otp, salt);

    console.log(hashOTP);

    await OTP.create({
      email,
      otp: hashOTP,
      // createdAt: new Date(),
    });

    await sendOTPEmail(email, otp);

    res.status(200).json({ message: "OTP send on registered email" });
  } catch (error) {
    next(error);
  }
};
export const UserVerifyOtp = async (req, res, next) => {
  try {
    //Fetch Data from Frontend
    const { email, otp } = req.body;

    //verify that all data exist
    if (!email || !otp) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    //Check if user is registred or not
    const existingUserOTP = await OTP.findOne({ email });
    if (!existingUserOTP) {
      const error = new Error("OTP Match Error, Please Retry");
      error.statusCode = 401;
      return next(error);
    }

    //verify the Password
    const isVerified = await bcrypt.compare(otp, existingUserOTP.otp);
    if (!isVerified) {
      const error = new Error("OTP Match Error, Please Retry");
      error.statusCode = 401;
      return next(error);
    }

    await existingUserOTP.deleteOne();

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
    }

    //Token Generation will be done here
    genOtpToken(existingUser, res);

    //send message to Frontend
    res.status(200).json({ message: "OTP Verified. Create New Password Now" });
    //End
  } catch (error) {
    next(error);
  }
};

export const UserForgetPassword = async (req, res, next) => {
  try {
    const { newPassword } = req.body;
    const currentUser = req.user;

    if (!newPassword) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    //encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    currentUser.password = hashPassword;

    await currentUser.save();

    res
      .status(200)
      .clearCookie("otpToken")
      .json({ message: "Password Changed. Please login again" });
  } catch (error) {
    next(error);
  }
};


