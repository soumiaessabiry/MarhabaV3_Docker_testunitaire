const mongoose=require("mongoose")
const roleSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    }



})
const Role=mongoose.model("Roles",roleSchema)
module.exports=Role