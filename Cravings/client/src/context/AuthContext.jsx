import React ,{useContext, useEffect , useState}from 'react'


const AuthContext = React.createContext();

 export const AuthProvider =(props)=>{
const [user, setUser]= useState(JSON.parse(sessionStorage.getItem("cravinguser"))||"");
const [isLogin ,setIsLogin] = useState(!!user)
const[role, setRole]=useState(user?.role)||""
//useEffect hook  depend on variable perform job that job could be anything
useEffect(()=>{setIsLogin(!!user);
   setRole(user?.role||"");

},[user]);

const value ={user , setUser ,isLogin ,setIsLogin,role,setRole };
//Authcontext is like a watcher  and it can provide also , so here we have asked provider to provide value to data member and member function
return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>

} ;
//usecontext got permission to use Authcontext
 export const useAuth=()=> {
    return  useContext(AuthContext);}

