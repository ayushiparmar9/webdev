import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/Api";

const OrderNow = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState();
  const [loading, setLoading] = useState(false);
  //for distance 
const [userLocation, setUserLocation] = useState(null);
//for opening iframe
const [mapRestaurant, setMapRestaurant] = useState(null);



  const fetchAllRestaurant = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");
      setRestaurants(res.data.data);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}
useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      setUserLocation({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
    },
    (err) => console.log("Location error:", err)
  );
}, []);






//we want to get all restaurants as soon as we load
  useEffect(() => {
    fetchAllRestaurant();
  }, []);

  const handleResturantClick = (restaurant) => {
    console.log("restaurant Clicked");
    console.log("OrderNow Page", restaurant);

    navigate("/restaurant-menu", {
    state: restaurant
  })
  };
  console.log(restaurants);

  return (
    <>
      <div className="bg-gray-100 p-3 h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">Order Now</h1>
          <p className="text-gray-600 mt-2">
            Browse our menu and place your order now!
          </p>
        </div>
{restaurants ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
    {restaurants.map((restaurant, idx) => {
      let distance = null;

      if (
        userLocation &&
        restaurant.geoLocation?.lat &&
        restaurant.geoLocation?.lon
      ) {
        distance = getDistance(
          userLocation.lat,
          userLocation.lon,
          restaurant.geoLocation.lat,
          restaurant.geoLocation.lon
        ).toFixed(1);
      }

      return (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
          onClick={() => handleResturantClick(restaurant)}
        >
          {/* Restaurant Image */}
          <img
            src={
              restaurant.photo?.url ||
              "https://placehold.co/400x250?text=Restaurant"
            }
            alt={restaurant.restaurantName}
            className="h-40 w-full object-cover"
          />

          {/* Content */}
          <div className="p-4">
            {/* Name */}
            <h2 className="text-lg font-bold text-gray-800 truncate">
              {restaurant.restaurantName}
            </h2>

            {/* Cuisine */}
           
            <div className="flex flex-wrap gap-2 mt-2">
  {restaurant.cuisine &&
    restaurant.cuisine !== "N/A" && (
      <span className="py-1 px-3 bg-amber-100 text-amber-700 text-xs rounded-full capitalize">
        {restaurant.cuisine}
      </span>
    )}
</div>


            {/* Distance */}
          <p
  className="text-sm text-orange-500 mt-3 underline-offset-0 cursor-pointer"
  onClick={(e) => {
    e.stopPropagation();
    setMapRestaurant(restaurant);
  }}
>
  📍 {distance ? `${distance} km away` : "Enable location"}
</p>


            {/* Button */}
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition">
              View Menu
            </button>
          </div>
        </div>
      );
    })}
  </div>
) : (
  <p className="text-center mt-10 text-gray-500">
    No restaurants found 😢
  </p>
)}

{/* ✅ Map Modal */}

{mapRestaurant && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-2xl p-4 w-[90%] md:w-[600px] relative">
      
      {/* Close Button */}
      <button
        className="absolute top-2 right-3 text-xl font-bold"
        onClick={() => setMapRestaurant(null)}
      >
        ✖
      </button>

      <h2 className="text-lg font-bold mb-3">
        {mapRestaurant.restaurantName} Location
      </h2>

      {/* Google Map iframe */}
      <iframe
        title="Restaurant Location"
        width="100%"
        height="350"
        className="rounded-xl"
        loading="lazy"
        src={`https://www.google.com/maps?q=${mapRestaurant.geoLocation.lat},${mapRestaurant.geoLocation.lon}&output=embed`}
      ></iframe>
    </div>
  </div>
)}
  
      </div>

    </>

  );
  


};

export default OrderNow;