const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser = require("body-parser")
const db=require("./Config/database")
const AuthRoute=require("./Routes/AuthRoute")
const Usermodel=require("./Models/UsersModel")
const Rolemodel=require("./Models/RoleModel")
const app=express()
const PORT=4011

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use("/Marhaba/auth/",AuthRoute)


app.listen(PORT,()=>{
    console.log(`connexion with server success in port ${PORT} `)
})