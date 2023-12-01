import mongoose from "mongoose";
import Authroles from "../utils/authRoles";
import bcrypt from "bcryptjs"


const userschema = new mongoose.Schema(
    {
       name:{
        type:String,
        required:true,
        maxlength:[
            50,"name must be at less then 50"]
       },
       email:{
        type:String,
        required:true,
     },
     password:{
        type:String,
        required:true,
        minLength:[8,"password must be atleast 8 chractors"],
        select:false
     },
     phonenumber:{
        type:Number,
        required:true,
     },
     role:{
        type:String,
        enum:Object.values(Authroles),
        default:Authroles.USER
     },
     forgetPasswordToken:String,
     forgetPasswordExpiry:Date
     }
   
,{ timestamps: true})

userschema.pre("save",async function(next){
    if(!this.isModified('password'))return next()
     this.password = bcrypt.hash(this.password,10)
})


userschema.methods = {
    comparePassword:async function(enteredpassword){
        return await bcrypt.compare(enteredpassword,this.password)
    }
}

export default mongoose.model("User",userschema)
