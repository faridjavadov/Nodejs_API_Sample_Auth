import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:String,
    surname:String,
    email:{
        type:String,
        required:true
    },
    password:String
},{
    versionKey:false,
})

export const User = mongoose.model('user',userSchema);