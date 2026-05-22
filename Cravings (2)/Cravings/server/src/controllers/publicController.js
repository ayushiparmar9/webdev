import Contact from "../models/contactModel.js";
import User from "../models/userModel.js";
import Menu from "../models/menuSchema.js";


export const NewContact = async(req, res, next)=>{
try {
    const{fullName , email , mobileNumber , message}=req.body;
    if(!fullName||!email||!mobileNumber||!message){
        const error = new Error("ALL feilds required");
      error.statusCode = 400;
      return next(error);
    }
    const newContact = await Contact.create({
        
        fullName ,
        email,
        mobileNumber,
        message,

    });
console.log(newContact);
res.status(201).json({message:"thanks for contactinf us, we will get back to you in 24 hours"});

    
} catch (error) {
    next(error);
}
};
export const GetAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await User
      .find({ role: "manager" })
      .select("-password");

    res.status(200).json({
      message: "Restaurants fetched successfully",
      data: restaurants,
    });
  } catch (error) {
    next(error);
  }
};
export const GetRestaurantMenuData = async (req, res, next) => {
  try {
    const { id, page } = req.params;
    console.log(page);

    if (!id) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    const restaurantMenuData = await Menu.find({
      restaurantID: id,
    }).sort({ updatedAt: -1 });
      // .sort({ updatedAt: -1 })
      // .skip(1)
      // .limit(2)
      // .populate("restaurantID");

    res
      .status(200)
      .json({ message: "Menu fetched Sucessfully", data: restaurantMenuData });
  } catch (error) {
    next(error);
  }
};