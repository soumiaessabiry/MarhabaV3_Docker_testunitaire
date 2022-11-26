const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true,

    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Roles'
    },
    Date_Inscription:{
        type:Date,
        
    },
    Confirmation_inscription:{
        type:Boolean,
        default:false
    }


})
const User = mongoose.model("users",userSchema)
module.exports= User