//models is a folder to store db schema

import mongoose from "mongoose";

/*
fullname ==> string
age ==> number
isAlive ==> boolean
email ==> string
password ==>string

*/
const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
    },
    age:{
        type:Number,
    },
    isAlive:{
        type:boolean,
    },
    email:{
        type:string,
    },
    password:{
        type:string,
    }
});

const userModel=mongoose.model("users",userSchema)
export default userModel

//1. make a schgema
//2.convert that into model 
//3.