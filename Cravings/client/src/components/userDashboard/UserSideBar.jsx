import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTransactionDollar } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { PiStackOverflowLogoFill } from "react-icons/pi";
import { FaHamburger } from "react-icons/fa";

const UserSideBar = ({ active, setActive ,isCollapsed ,setIsCollapsed}) => {
  const menuItems =[{key:"overview",title:"overview" , icon:<PiStackOverflowLogoFill />},
{key:"profile",title:"profile" , icon:<FaUser />},
{key:"order",title:"order" , icon:<TiShoppingCart />},
{key:"transactions",title:"transactions" , icon:<TbTransactionDollar />},
{key:"helpdesk",title:"helpdesk" , icon:<RiCustomerService2Fill />},


  ]
  return (
    <>
      <div className="bg-(--color-background)">
        <div className="text-xl font-bold flex gap-3 items-center p-3">
          <button className="hover:scale-105 ms-2" onClick={()=>setIsCollapsed(!isCollapsed)}><FaHamburger  /></button>
      {!isCollapsed&&<span>user dashboard</span>} </div>
        <hr />
        <div className=" grid gap-3 py-6 space-y-5 w-full">
          {
            menuItems.map((item,idx)=>(<button
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
{!isCollapsed&&item.title}
            
            
          </button>))
          }
        
        
          
          
          
          
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
