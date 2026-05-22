import React from "react";
import clogo from "../assets/clogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, isLogin,role } = useAuth();
  const navigate = useNavigate();
  const handleNavigate =()=>{
switch(role){
  case "manager":{
    setRole("manager")
    navigate("/restaurant-dashboard");
    break;
  }
  case "partner":{
    setRole("partner")
    navigate("/rider-dashboard");
    break;
  }
  case "customer":{
    setRole("customer")
   navigate("/user-dashboard", { state: { tab: "overview" } });
    break;
  }
}
  }

  return (
    <>
      {" "}
      <div className="bg-(--color-primary) px-4 py-2 flex justify-between items-center">
        {" "}
        <Link to={"/"}>
          {" "}
          <img
            src={clogo}
            alt=""
            className="h-12 w-20 object-cover invert-100"
          />{" "}
        </Link>{" "}
        <div className="flex gap-4">
          {" "}
          <Link
            to={"/"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            {" "}
            Home{" "}
          </Link>{" "}
          <Link
            to={"/about"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            {" "}
            About{" "}
          </Link>{" "}
          <Link
            to={"/contact"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            {" "}
            Contact{" "}
          </Link>{" "}
        </div>{" "}
        <div className="flex-gap-5">
          {isLogin ? (
            <div onClick={()=> navigate("/user-dashboard") } className="cursor-pointer">{user?.fullName}</div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-(--color-secondary)  shadow-2xl py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded-2xl "
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="bg-(--color-secondary) shadow-2xl py-2 px-4 font-bold hover:bg-(--color-secondary-hover) hover:text-white rounded-2xl "
              >
                Register
              </button>
            </>
          )}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Header;
