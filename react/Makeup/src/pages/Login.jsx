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
  const handleclearform = () => {
    setcontactData({
      userName: "",
    
      password: "",
      
      
    });
  };

  return (
    <div className='text-center ' >
        <h1 className='font-bold'>login to your account</h1>
        <form className='grid-cols-1 justify-items-center p-4'
        onSubmit={handleSubmit}
        onReset={handleclearform}
        >
<div className='flex gap-2 p-2'><label htmlFor="userName" className='text-blue-700'>userName</label>
<input type="text"
name='userName'
className= 'border border-amber-100 rounded-2xl'
value={contactData.userName}
    onChange={handleChange}
required


 />
</div>

<div className='flex gap-2 p-2'>
    <label htmlFor="password" className='text-blue-700'>password</label>
    <input type="password"
     name="password"
     value={contactData.password}
      onChange={handleChange}
      required
      
      className='border border-amber-100 rounded-2xl'
      />
</div>

          <div className='flex gap-3'><button type="submit" className="bg-pink-500 text-amber-50 p-2 rounded-2xl" >
            submit
          </button>
          <button type="reset" className="bg-pink-500 text-amber-50 p-2 rounded-2xl" >
            clear
          </button>
          </div>

        </form>
    </div>
  )
}

export default Login