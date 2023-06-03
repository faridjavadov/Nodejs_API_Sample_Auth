import mongoose from "mongoose";
import env  from "dotenv/config";

export const ConnectMongo = async ()=>{
    try{
       await mongoose.connect(process.env.CONNECTION)
    }catch(err){
        console.log(err);
    }
}