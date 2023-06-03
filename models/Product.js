import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema({
    productName:{
        required:true,
        type:String
    },
    productPrice:{
        required:true,
        type:Number
    }
},{
    versionKey:false,
    timestamps:true,
})

export const Product = mongoose.model('product',ProductSchema);

