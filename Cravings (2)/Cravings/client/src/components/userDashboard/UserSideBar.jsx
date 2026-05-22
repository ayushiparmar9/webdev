import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTransactionDollar } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { PiStackOverflowLogoFill } from "react-icons/pi";
import { FaHamburger } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";
import api from "../../config/Api";
import { Navigate, useNavigate } from "react-router-dom";


const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
const { setUser, setIsLogin } = useAuth();
const navigate = useNavigate();
  const menuItems = [
    { key: "overview", title: "overview", icon: <PiStackOverflowLogoFill /> },
    { key: "profile", title: "profile", icon: <FaUser /> },
    { key: "order", title: "order", icon: <TiShoppingCart /> },
    {
      key: "transactions",
      title: "transactions",
      icon: <TbTransactionDollar />,
    },
    { key: "helpdesk", title: "helpdesk", icon: <RiCustomerService2Fill /> },
  ];

const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      navigate("/")
      sessionStorage.removeItem("CravingUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  }

  return (
    <>
      <div className="p-2">
<div className="bg-(--color-background)">
        <div className="text-xl font-bold flex gap-3 items-center p-3">
          <button
            className="hover:scale-105 ms-2"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <FaHamburger className="text-amber-800" />
          </button>
          {!isCollapsed && <span>user dashboard</span>}{" "}
        </div>
        <hr />
        <div className=" grid gap-3 py-6 space-y-5 w-full">
          {menuItems.map((item, idx) => (
            <button
              className={`flex gap-3 items-center hover:bg-bg-gray-100/70 p-3 rounded-xl text-nowrap overflow-hidden duration-300
        ${
          active === item.key
            ? "bg-(--color-secondary) text-white"
            : "hover:bg-gray-100/70"
        }`}
              onClick={() => setActive(item.key)}
              key={idx}
            >
              {item.icon}
              {!isCollapsed && item.title}
            </button>
          ))}
        </div>
      </div>

<div>
          <button
            className="flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300 hover:bg-red-500 hover:text-white text-red-600"
            onClick={handleLogout}
          >
            {" "}
            <MdLogout />
            {!isCollapsed && "Logout"}
          </button>
        </div>


      </div>
    </>
  );
};


export default UserSideBar;
