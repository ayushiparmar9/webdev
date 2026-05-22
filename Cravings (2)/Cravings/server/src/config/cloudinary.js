import dotenv from "dotenv";
dotenv.config();
import {v2 as cloudinary} from "cloudinary";

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,

  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,

})
console.log(process.env.CLOUDINARY_CLOUD_NAME)
console.log(process.env.CLOUDINARY_API_KEY);
console.log(process.env.CLOUDINARY_API_SECRET.length);
console.log("Current Unix:", Math.floor(Date.now() / 1000));
console.log(new Date().toString());

console.log("cloudinary configuration done");
export default cloudinary;