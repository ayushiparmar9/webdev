import dotenv from 'dotenv';
dotenv.config();
import connectDB from '../config/db.js';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { DummyAdmin } from './dummy.js';

const seedAdmin = async()=>{
    try {
await connectDB();
 const adminData = DummyAdmin();
const salt = await bcrypt.genSalt(10);
const existingAdmin = await User.findOne({email:adminData.email});
if(existingAdmin){
    if(existingAdmin.role==="admin"){
        await existingAdmin.deleteOne();
        console.log('old admin removed');
    }else{
console.log('email already registered as other user type ');
return;
    }
}
console.log("ading new Admin user");
const AdminUser = await User.create({
    ...adminData, password:await bcrypt.hash(adminData.password, salt)
});
console.log('admin seeded Successfull');
console.log(AdminUser.fullName ,AdminUser.email) ;





        
    } catch (error) {
        console.log(error);
        console.log("error seeding the admin")
    }
    process.exit(1);
}
seedAdmin();