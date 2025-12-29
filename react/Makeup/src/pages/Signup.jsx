import React, { useState } from "react";

const Signup = () => {
const [SignupData ,setSignupData] = useState({
    userName: "",
    email:"",
    phoneNumber:"",
    password:"",
    confirmPassword:"",
})
const handleChange =(e)=>{
    const { name, value } = e.target;
    setSignupData((previousData) => ({ ...previousData, [name]: value }));
}
const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(SignupData);
    } catch (error) {
      console.log(error.messege);
    } 
    
  };




  return (
    <div className="grid-cols-1 justify-items-center p-4">
      <h1 className="text-pink-800 text-5xl font-extrabold">Welcome to Makeup</h1>
      <form onSubmit={handleSubmit} className="p-6">
        <div className="flex p-2 gap-5">
          <label htmlFor="userName" className="text-blue-700 font-bold ">userName*</label>
          <input
            type="text"
            name="userName"
            className='border border-amber-100 rounded-2xl'
            value={SignupData.userName}
            onChange={handleChange}
            
          />
        </div>
        <div className="flex p-2 gap-7">
            <label htmlFor="email" className="text-blue-700 font-bold ">email*</label>
            <input
              type="text"
              name="email"
              value={SignupData.email}
              onChange={handleChange}
              className='border border-amber-100 rounded-2xl'
                  
            />
          </div>
          <div className="flex p-2 gap-7">
            <label htmlFor="phone" className="text-blue-700 font-bold ">Phone*</label>
            <input
              type="number"
              name="phoneNumber"
              value={SignupData.phoneNumber}
              onChange={handleChange}
              className='border border-amber-100 rounded-2xl'
                
            />
          </div>
          <div className='flex p-2 gap-5'>
    <label htmlFor="password" className="text-blue-700 font-bold ">password*</label>
    <input type="password"
     name="password"
     value={SignupData.password}
      onChange={handleChange}
      
      
      className='border border-amber-100 rounded-2xl'
      />
</div>
<div className='flex p-2 gap-5'>
    <label htmlFor="confirmPassword " className="text-blue-700 font-bold ">password*</label>
    <input type="password"
     name="confirmPassword"
     value={SignupData.confirmPassword}
      onChange={handleChange}
      
      
      className='border border-amber-100 rounded-2xl'
      />
</div>
<div className="text-center"><button type="submit" className="bg-pink-500  rounded-2xl p-2 text-cyan-50">Sign up</button>
</div>





      </form>
    </div>
  );
};

export default Signup;
