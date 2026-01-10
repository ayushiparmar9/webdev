import dotenv from "dotenv"
dotenv.config();
import express from "express"
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/myRouter.js"//for all three

const app = express();
//9 jan
app.use(express.json());

app.use("/auth" ,AuthRouter);//for all three




app.get("/",(req, res)=>{
    console.log("server is Running");
    res.json({messege:"server is running successfully"});
});
app.use((err, req, res, next)=>{
    const ErrorMessage =err.message||"Internal server error";
    const StatusCode = err.statusCode||500;
    res.status(StatusCode).json({messege:ErrorMessage});
})

const port = process.env.PORT||5000;
app.listen(port , ()=>{
    console.log("Server started at port" , port);
    connectDB();
});
 