import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";
import { useState } from "react";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const restaurantId = useParams().id;
  console.log("Menu Page", restaurantId);

  const [restaurantData, setRestaurantData] = useState();

  const fetchRestaurantMenu = async () => {
    try {
      const res = await api.get(`/public/restaurant-menu/${restaurantId}/1`);
      setRestaurantData(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, [restaurantId]);

  console.log(restaurantData || "No data");

  return (
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
              <button className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition">
                Add to Cart
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
);

 
};

export default RestaurantDisplayMenu;