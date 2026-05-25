import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const featuredRestaurants = [
    {
      id: 1,
      name: "Spice Kingdom",
      cuisine: "Indian",
      rating: 4.5,
      deliveryTime: "30-40 mins",
    },
    {
      id: 2,
      name: "Pizza Paradise",
      cuisine: "Italian",
      rating: 4.3,
      deliveryTime: "25-35 mins",
    },
    {
      id: 3,
      name: "Dragon Wok",
      cuisine: "Chinese",
      rating: 4.6,
      deliveryTime: "35-45 mins",
    },
    {
      id: 4,
      name: "Burger Haven",
      cuisine: "American",
      rating: 4.4,
      deliveryTime: "20-30 mins",
    },
  ];

  return (
    <>

      {/* Hero Section */}
      <section className="bg-orange-50 min-h-[80vh] flex items-center">

        <div className="max-w-6xl mx-auto px-6 w-full">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>

              <p className="text-orange-500 font-semibold mb-3 tracking-wide">
                CRAVINGS
              </p>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                Good Food. <br />
                Delivered Fast.
              </h1>

              <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-lg">
                Order fresh meals from nearby restaurants and
                enjoy quick delivery at your doorstep.
              </p>

              <div className="flex gap-4 mt-8">

                <button
                  onClick={() => navigate("/order-now")}
                  className="bg-orange-500 text-white px-7 py-3 rounded-xl hover:bg-orange-600 transition"
                >
                  Order Now
                </button>

                <button
                  onClick={() => navigate("/about")}
                  className="border border-orange-300 text-orange-500 px-7 py-3 rounded-xl hover:bg-orange-100 transition"
                >
                  Explore
                </button>

              </div>

            </div>

            {/* Right Image */}
            <div className="flex justify-center">

              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                alt="food"
                className="w-full max-w-md h-[420px] object-cover rounded-3xl shadow-lg"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="py-6 bg-white border-b">

        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-4">

          {[
            "Pizza",
            "Burger",
            "Chinese",
            "Desserts",
            "South Indian",
          ].map((item) => (

            <div
              key={item}
              className="px-6 py-3 bg-orange-100 text-orange-600 rounded-full font-medium hover:bg-orange-200 cursor-pointer transition"
            >
              {item}
            </div>

          ))}

        </div>

      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Restaurants
            </h2>

            <p className="text-gray-600 text-lg">
              Explore top restaurants near you
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {featuredRestaurants.map((restaurant) => (

              <div
                key={restaurant.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 overflow-hidden cursor-pointer hover:scale-[1.02]"
              >

                <div className="h-40 bg-orange-100 flex items-center justify-center">

                  <span className="text-5xl">
                    🍴
                  </span>

                </div>

                <div className="p-4">

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {restaurant.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    {restaurant.cuisine}
                  </p>

                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-1">

                      <span className="text-yellow-500">
                        ⭐
                      </span>

                      <span className="font-semibold text-gray-800">
                        {restaurant.rating}
                      </span>

                    </div>

                    <p className="text-sm text-gray-500">
                      {restaurant.deliveryTime}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-orange-50">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Cravings?
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              {
                icon: "🚴",
                title: "Fast Delivery",
                description:
                  "Quick and reliable delivery to your doorstep",
              },

              {
                icon: "🍲",
                title: "Fresh Food",
                description:
                  "Prepared fresh from trusted restaurants",
              },

              {
                icon: "💳",
                title: "Easy Payments",
                description:
                  "Smooth and secure payment experience",
              },

            ].map((feature, index) => (

              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm text-center"
              >

                <span className="text-4xl mb-4 block">
                  {feature.icon}
                </span>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
};

export default Home;