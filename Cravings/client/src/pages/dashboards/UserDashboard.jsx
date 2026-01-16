import React, {useState} from 'react'
import UserSideBar from '../../components/userDashboard/UserSideBar'
import UserHelpDesk from '../../components/userDashboard/UserHelpDesk';
import UserOrder from '../../components/userDashboard/UserOrder';
import UserProfile from '../../components/userDashboard/UserProfile';
import UserOverview from '../../components/userDashboard/userOverview';
import UserTransactions from '../../components/userDashboard/UserTransactions';




const UserDashboard = () => {
    const [active, setActive]=useState("overview");
  return (
    <>

    <div className=' w-full h-[90vh] flex'>
        <div className='border bg-(--color-background) border-green-500  w-2/10  '><UserSideBar active={active} setActive={setActive}/></div>
        <div className='border border-amber-700 w-8/10'> 
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