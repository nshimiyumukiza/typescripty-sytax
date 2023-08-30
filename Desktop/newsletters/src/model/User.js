import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    email:{
    type:String,
    unique:true,
    required:true
       
    },

    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String
       
    },

    role:{
        type:String,
        required:true,
        enum:["user","admin"],
        default:"user"
    },

   createdAt:{
    type:Date,
    default:Date.now()
   },
    });

const User=mongoose.model("User",userschema)
export default User;