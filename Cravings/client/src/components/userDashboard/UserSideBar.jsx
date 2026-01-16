import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTransactionDollar } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { PiStackOverflowLogoFill } from "react-icons/pi";

const UserSideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="bg-(--color-background)">
        <div className="text-xl font-bold">user dashboard</div>
        <hr />
        <div className=" grid gap-3 p-6">
          <button
            className={`flex gap-3 items-center hover:bg-bg-gray-100/70 p-3 rounded-xl 
        ${
          active === "overview"
            ? "bg-(--color-secondary) text-white"
            : "hover:bg-gray-100/70"
        }`}
            onClick={() => setActive("overview")}
          >
            <PiStackOverflowLogoFill />
            overview
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-bg-gray-100/70 p-3 rounded-xl 
        ${
          active === "profile"
            ? "bg-(--color-secondary) text-white"
            : "hover:bg-gray-100/70"
        }`}
            onClick={() => setActive("profile")}
          >
            <FaUser />
            profile
          </button>
          <button
             className={`flex gap-3 items-center hover:bg-bg-gray-100/70 p-3 rounded-xl 
        ${
          active === "order"
            ? "bg-(--color-secondary) text-white"
            : "hover:bg-gray-100/70"
        }`}
            onClick={() => setActive("order")}
          >
            <TiShoppingCart />
            order
          </button>
          <button
             className={`flex gap-3 items-center hover:bg-bg-gray-100/70 p-3 rounded-xl 
        ${
          active === "transaction"
            ? "bg-(--color-secondary) text-white"
            : "hover:bg-gray-100/70"
        }`}
            onClick={() => setActive("transaction")}
          >
            <TbTransactionDollar />
            transaction
          </button>
          <button
             className={`flex gap-3 items-center hover:bg-bg-gray-100/70 p-3 rounded-xl 
        ${
          active === "helpdesk"
            ? "bg-(--color-secondary) text-white"
            : "hover:bg-gray-100/70"
        }`}
            onClick={() => setActive("helpdesk")}
          >
            <RiCustomerService2Fill />
            helpdesk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
