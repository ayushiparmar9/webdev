import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaRegTrashAlt } from "react-icons/fa";


const RestaurantDisplayMenu = () => {
   const { isLogin, role } = useAuth();
  const navigate = useNavigate();
  //const restaurantId = useParams().id;
   const data = useLocation().state;
  //console.log("Menu Page", restaurantId);
   console.log("Resturant Menu Page", data);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [cartFlag, setCartFlag] = useState([]);

  const [restaurantData, setRestaurantData] = useState();
   

  const fetchRestaurantMenu = async () => {
    try {
      const res = await api.get(`/public/restaurant/menu/${data._id}`);
      setRestaurantData(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

 const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCart();
    setCartFlag([]);
  };


   const handleAddToCart = (NewItem) => {
    if (cart) {
      if (cart.restaurantID === NewItem.restaurantID) {
        setCart((prev) => ({
          ...prev,
          cartItem: [...prev.cartItem, { ...NewItem, quantity: 1 }],
          cartValue: Number(prev.cartValue) + Number(NewItem.price),
        }));
        setCartFlag((prev) => [...prev, NewItem._id]);
      } else {
        toast.error("Clear the cart first");
      }
    } else {
      setCart({
        restaurantID: NewItem.restaurantID,
        cartItem: [{ ...NewItem, quantity: 1 }],
        cartValue: Number(NewItem.price),
      });
      setCartFlag((prev) => [...prev, NewItem._id]);
    }
  };

  const handleCheckout = () => {
    isLogin && role === "customer"
      ? (localStorage.setItem("cart", JSON.stringify(cart)),
        navigate("/checkout-page"))
      : (toast.error("Please Login as Customer"), navigate("/login"));
  };

  // console.log(cart);

  useEffect(() => {
    cart && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
 

  console.log(restaurantData || "No data");
   useEffect(() => {
    fetchRestaurantMenu();
  }, [data]);

  return (
  <>
  <div className="bg-gray-100 min-h-screen flex justify-center">
    <div className="w-full max-w-4xl p-6">
      
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Restaurant Menu 🍽️
      </h1>

      <p className="text-gray-500 mb-6 text-center">
        Browse delicious items and order now!
      </p>

      {/* If No Menu Items */}
      {restaurantData?.length === 0 && (
        <p className="text-center text-gray-500">
          No menu items available 😢
        </p>
      )}

      {/* Menu Items List */}
      <div className="flex flex-col gap-5">
        {restaurantData?.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-md p-4 flex justify-between items-center hover:shadow-lg transition"
          >
            {/* ✅ Left Side Details */}
            <div className="flex-1 pr-8">
              {/* Item Name */}
              <h2 className="text-lg font-bold text-gray-800">
                {item.itemName}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </p>

              {/* Price */}
              <p className="text-md font-semibold text-orange-600 mt-2">
                ₹ {item.price}
              </p>

              {/* Type Badge */}
              <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 capitalize">
                {item.type}
              </span>

              {/* Button */}
              <button className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition disabled:bg-gray-300"
             onClick={() => handleAddToCart(item)}
                        disabled={cartFlag.includes(item._id)}
              >
                {console.log(
                          "cartFlag",
                          cartFlag.includes(item._id),
                        )}
                        {cartFlag.includes(item._id)
                          ? "Added"
                          : "Add to Cart"}
                
              </button>
            </div>

            {/* ✅ Right Side Image */}
            <img
              src={
                item.images?.[0]?.url ||
                "https://placehold.co/150x150?text=Food"
              }
              alt={item.itemName}
              className="w-32 h-28 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
    {cart && (
        <div className="fixed w-full bottom-5 flex items-center justify-center">
          <div className="bg-(--color-secondary) rounded-3xl w-2xl py-2 px-5">
            <div className="flex items-center justify-between">
               <div className="text-white font-bold flex gap-3 items-center">
                <span>Items : {cart.cartItem.length}</span>
                <button
                  className=" text-white px-2 py-2 rounded hover:bg-white/30 transition disabled:bg-gray-300"
                  onClick={handleClearCart}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
              <div className="text-white font-bold flex gap-4 items-center">
                <span>₹ : {cart.cartValue}</span>
                <button
                   className="text-white px-6 py-2 rounded hover:bg-(--color-primary-hover)/40 transition disabled:bg-gray-300"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}








  </>
);

 
};

export default RestaurantDisplayMenu;