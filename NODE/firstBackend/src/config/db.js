import mongoose from "mongoose";
const connectDB = async()=>{
    try {

      const conn = await mongoose.connect(process.env.MONGO_URI) ;//connecting the mongo db
      console.log("MongoDd connected at :", conn.connection.host);
      console.log(`Mongodb connnected at :${conn.connection.host}:${conn.connection.port}`);
      console.log("DATABASE NAME:",conn.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;