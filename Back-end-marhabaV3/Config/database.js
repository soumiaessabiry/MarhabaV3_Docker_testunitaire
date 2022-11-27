const mongoose=require("mongoose")
const Connect =mongoose.connect('mongodb+srv://rout:12345@marhabav3.iqtsqbb.mongodb.net/MARHABAV3?retryWrites=true&w=majority')
const db =mongoose.Connect
try{
    console.log("connect with data base is success")
}catch(error){
    console.log("Erroor to connect with database !!!!!!!!!!!!!!!!!!!!") 
}
