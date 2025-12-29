import React,{useState} from 'react'

const Login = () => {
 

const [contactData, setcontactData] = useState({
    userName: "",
    password: "",
    
  });
const handleChange = (e) => {
    const { name, value } = e.target;
    setcontactData((previousData) => ({ ...previousData, [name]: value }));
  };




const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(contactData);
    } catch (error) {
      console.log(error.messege);
    } 
    
  };

  return (
    <div className='text-center ' >
        <h1 className='font-bold'>login to your account</h1>
        <form className='grid-cols-1 justify-items-center p-4'
        onSubmit={handleSubmit}
        >
<div className='flex gap-2 p-2'><label htmlFor="userName" className='text-blue-700'>userName</label>
<input type="text"
name='userName'
className= 'border border-amber-100 rounded-2xl'
value={contactData.userName}
    onChange={handleChange}



 />
</div>

<div className='flex gap-2 p-2'>
    <label htmlFor="password" className='text-blue-700'>password</label>
    <input type="password"
     name="password"
     value={contactData.password}
      onChange={handleChange}
      
      
      className='border border-amber-100 rounded-2xl'
      />
</div>

          <button type="submit" className="bg-pink-500 text-amber-50 p-2 rounded-2xl" >
            submit
          </button>

        </form>
    </div>
  )
}

export default Login