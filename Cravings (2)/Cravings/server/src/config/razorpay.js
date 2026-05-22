import Razorpay from 'razorpay'

const razorpay = new Razorpay({
  key_id:process.env.Razorpay_TEST_API_KEY,
  key_secret:process.env.Razorpay_TEST_API_SECRET, 
});


 export const verifyRazorPayConnect = async ()=>{
    const orders = await razorpay.orders.all({count:1}) 
    return orders
}


export default razorpay