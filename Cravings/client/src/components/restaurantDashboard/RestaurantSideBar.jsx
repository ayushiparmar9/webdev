import React from "react";
import { FaHamburger } from "react-icons/fa";
import { PiStackOverflowLogoFill } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { TbTransactionDollar } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

import { useAuth } from "../../context/AuthContext";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RestaurantSideBar = ({
  active,
  setActive,
  isCollapsed,
  setIsCollapsed,
}) => {
  const { setUser, setIsLogin } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "overview",
      title: "overview",
      icon: <PiStackOverflowLogoFill />,
    },
    {
      key: "profile",
      title: "profile",
      icon: <FaUser />,
    },
    {
      key: "orders",
      title: "orders",
      icon: <TiShoppingCart />,
    },
    {
      key: "menu",
      title: "menu",
      icon: <FaHamburger />,
    },
    {
      key: "earnings",
      title: "earnings",
      icon: <TbTransactionDollar />,
    },
  ];

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      navigate("/");
      sessionStorage.removeItem("CravingUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  return (
    <div className="p-2 h-full flex flex-col justify-between">
      
      <div className="bg-(--color-background)">
        <div className="text-xl font-bold flex gap-3 items-center p-3">
          <button
            className="hover:scale-105 ms-2"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <FaHamburger className="text-amber-800" />
          </button>
          {!isCollapsed && <span>restaurant dashboard</span>}
        </div>

        <hr />

        <div className="grid gap-3 py-6">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex gap-3 items-center p-3 rounded-xl text-nowrap overflow-hidden duration-300
                ${
                  active === item.key
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
            >
              {item.icon}
              {!isCollapsed && item.title}
            </button>
          ))}
        </div>
      </div>

      
      <div>
        <button
          onClick={handleLogout}
          className="flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300 hover:bg-red-500 hover:text-white text-red-600"
        >
          <MdLogout />
          {!isCollapsed && "Logout"}
        </button>
      </div>
    </div>
  );
};

export default RestaurantSideBar;
