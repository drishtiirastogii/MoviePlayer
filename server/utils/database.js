import mongoose from "mongoose";
import dotenv from "dotenv";

// dotenv.config({
//     path:"../.env"
// })

const databaseConnection = () => {
    //mongoose.connect(process.env.MONGO_URI).
    mongoose.connect("mongodb+srv://drishtiirastogii:MuoE4ROEJLtbs0ih@cluster0.suwnhsl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("mongoDB connection successfull");
    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;