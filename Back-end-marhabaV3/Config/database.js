const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://rout:12345@marhabav3.iqtsqbb.mongodb.net/MARHABAV3?retryWrites=true&w=majority')
.then(()=>{
    console.log("connect with data base is success")
}).catch(()=>{
    console.log("Erroor to connect with database !!!!!!!!!!!!!!!!!!!!") 
})
