import React, {useState,useEffect} from 'react'
import UserSideBar from '../../components/userDashboard/UserSideBar'
import UserHelpDesk from '../../components/userDashboard/UserHelpDesk';
import UserOrder from '../../components/userDashboard/UserOrder';
import UserProfile from '../../components/userDashboard/UserProfile';
import UserOverview from '../../components/userDashboard/userOverview';
import UserTransactions from '../../components/userDashboard/UserTransactions';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";




const UserDashboard = () => {


const { role, isLogin } = useAuth();
  const navigate = useNavigate();
    const [active, setActive]=useState("overview");
    const[isCollapsed ,setIsCollapsed] = useState(false);



     useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  });
   if (role !== "customer") {
    return (
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-5xl text-red-600">
              ⊗
            </div>
            <div className="text-xl">
              You are not login as Customer. Please Login again.
            </div>
          </div>
        </div>
      </>
    );
  }




  return (
    <>

    <div className=' w-full h-[90vh] flex'>
        <div className= {`bg-(--color-background)   shadow-2xl duration-900 ${isCollapsed?"w-2/60":"w-12/60"}  `}><UserSideBar active={active} setActive={setActive} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/></div>
        <div className=' w-58/60'> 
        {active==="overview"&&<UserOverview/>}
         {active==="profile"&&<UserProfile/>}
          {active==="orders"&&<UserOrder/>}
           {active==="transaction"&&<UserTransactions/>}
            {active==="helpdesk"&&<UserHelpDesk/>}
        </div>
    </div>

    </>
  )
}

export default UserDashboard