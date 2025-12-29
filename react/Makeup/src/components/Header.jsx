import React from "react";
import { Link } from 'react-router-dom';

const Header =()=>{
    return (<>
     <div className="flex justify-between bg-pink-300 p-3.5">
        <h1 className="font-serif font-extrabold text-4xl  text-pink-950">
            
            Makeup 💄💅🫦🎀</h1>
       <div className="flex gap-5 text-3xl text-pink-900">
        <Link to={"/"} >
            home
          </Link>
          <Link to={"/About"}>about</Link>
          <Link to ={"/Login"}>login</Link>
          <Link to ={"/Signup"}>Signup</Link>

        </div> 

     </div>

    </>);
}
export default Header;
