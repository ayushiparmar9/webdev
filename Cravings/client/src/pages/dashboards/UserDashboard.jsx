import React, {useState} from 'react'
import UserSideBar from '../../components/userDashboard/UserSideBar'
import UserHelpDesk from '../../components/userDashboard/UserHelpDesk';
import UserOrder from '../../components/userDashboard/UserOrder';
import UserProfile from '../../components/userDashboard/UserProfile';
import UserOverview from '../../components/userDashboard/userOverview';
import UserTransactions from '../../components/userDashboard/UserTransactions';




const UserDashboard = () => {
    const [active, setActive]=useState("overview");
    const[isCollapsed ,setIsCollapsed] = useState(false);
  return (
    <>

    <div className=' w-full h-[90vh] flex'>
        <div className= {`bg-(--color-background)   shadow-2xl duration-300 ${isCollapsed?"w-2/60":"w-12/60"}  `}><UserSideBar active={active} setActive={setActive} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/></div>
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