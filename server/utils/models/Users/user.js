import mongoose from "mongoose";
/*
fullname ==> string
age ==> number
isAlive ==>boolean
email ==>string
password ==>string

*/
const userschema = new mongoose.Schema({
fullname:{
type:string,
},
age:{
type:number,
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

