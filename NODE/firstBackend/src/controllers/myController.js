import User from "../models/userModel.js";

export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;
    if (!fullName || !email || !phone || !password) {
      const error = new Error("All feilds rerquired");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("email already exist");
      error.statusCode = 409;
      return next(error);
    }

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });
    console.log(newUser);
    res.status(201).json({ messege: "UsER created sucessfully" });
  } catch (error) {
    console.log(error);
    next(error); // we are sending this error to error handler
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All feilds rerquired");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("user not found");
      error.statusCode = 404;
      return next(error);
    }

    const isVerified = password == existingUser.password;
    if (!isVerified) {
      const error = new Error("user not authorized");
      error.statusCode = 402;
      return next(error);
    }
    console.log(existingUser);
    res.status(200).json({ messege: "welcome back", data: existingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ messege: "logout successful" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, phone } = req.body;
    if (!fullName || !email || !phone) {
      const error = new Error("All feilds rerquired");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("user not found");
      error.statusCode = 404;
      return next(error);
    }
    existingUser.fullName = fullName;
    existingUser.phone = phone;

    await existingUser.save();
    res.status(200).json({message:"user updated successfully",data:existingUser});
  } catch (error) {
    console.log(error);
    next(error);
  }
};
