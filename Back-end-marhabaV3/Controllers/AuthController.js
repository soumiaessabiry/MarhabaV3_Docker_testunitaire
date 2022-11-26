const db=require("../Config/database")
const Usermodel=require("../Models/UsersModel")
const Rolemodel=require("../Models/RoleModel")

const Register=(req,res)=>{
    res.send("REgitser")

}
const Login=(req,res)=>{
    res.send("login")

}
const AddRole=(req,res)=>{
    res.send("Ajouter ROLE")

}

module.exports={
    Register,
    Login,
    AddRole
}