import cloudinary from "../config/cloudinary.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt"
export const UserUpdate = async (req, res, next) => {
  try {
    //logic here

    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log("OldData: ", currentUser); //old user data in JSON format
    //first Way
    // currentUser.fullName = fullName;
    // currentUser.email = email;
    // currentUser.mobileNumber = mobileNumber;
    // await currentUser.save();

    // console.log("NewData:", currentUser);

    //Second Way

    const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullName,
        email,
        mobileNumber,
      },
      { new: true },
    );

    console.log("Updated User: ", updatedUser);
    res
      .status(200)
      .json({ message: "User Updated Sucessfully", data: updatedUser });

    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};

export const UserChangePhoto = async (req, res, next) => {
  try {
    console.log("body: ", req.body);
    console.log("file:", req.file);

    const currentUser = req.user;
    const dp = req.file;

    if (!dp) {
      const error = new Error("profile picture required");
      error.statusCode = 400;
      return next(error);
    }

    // make sure photo object exists
    if (!currentUser.photo) {
      currentUser.photo = {};
    }

    // delete old photo if exists
    if (currentUser.photo.publicID) {
      await cloudinary.uploader.destroy(currentUser.photo.publicID);
    }

    // convert buffer → base64
    const b64 = Buffer.from(dp.buffer).toString("base64");

    // ✅ FIXED mimetype + format
    const dataURI = `data:${dp.mimetype};base64,${b64}`;
    console.log("DataUri", dataURI.slice(0, 100));

    // upload to cloudinary
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "Cravings/User",
      width: 500,
      height: 500,
      crop: "fill",
    });

    console.log("Image uploaded successfully", result);

    // save new photo
    currentUser.photo.url = result.secure_url;
    currentUser.photo.publicID = result.public_id;

    // ✅ SAVE TO DATABASE
    await currentUser.save();

    res.status(200).json({
      message: "Photo Updated",
      data: currentUser,
    });
  } catch (error) {
    next(error);
  }
};
 export const UserResetPassword =async(req,res,next)=>{
try {
    const { oldPassword, newPassword } = req.body;
    const currentUser = req.user;

    if (!oldPassword || !newPassword) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    const isVerified = await bcrypt.compare(oldPassword, currentUser.password);
    if (!isVerified) {
      const error = new Error("Old Password didn't match");
      error.statusCode = 401;
      return next(error);
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    currentUser.password = hashPassword;

    await currentUser.save();

    res.status(200).json({ message: "Password Reset Successful" });
  } catch (error) {
    next(error);
  }
};


