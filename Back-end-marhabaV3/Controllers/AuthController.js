const db=require("../Config/database")
const Usermodel=require("../Models/UsersModel")
const Rolemodel=require("../Models/RoleModel")
const env=require("dotenv")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const Role = require("../Models/RoleModel")
const role_client=process.env.role_client
const role_livreur=process.env.role_livreur
const role_manager=process.env.role_manager
const locltorage=require("local-storage")
const key =process.env.key

                    //**************Register*************** */

const Register=async(req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password.toString();
    const phone=req.body.phone;
    const salt= await bcrypt.genSalt(10)
    const hachPassword=  bcrypt.hashSync(password,salt)
    const checkUser=await Usermodel.findOne({
        email:email
    })
    if (checkUser) {
        res.status(400).send({message:" Oooops user is aready exist !!! "})
    }else{ 
    const InsertUser=new Usermodel({
        username:username,
        email:email,
        password:hachPassword,
        phone:phone,
        role:role_client
    })
        if(!username||!email||!password||!phone){
            res.status(400).send("fill All fields !!!!!!")
        }else{
            const saveuser=await  InsertUser.save();
            try {
                res.send({message_successRegister:saveuser})
            } catch (error) {
                res.send({error})
            }
            }
        }
   
}
// const tokenrole=(role)=>{
//     return jwt.sign({role:role},key)
// }

                    //**************login*************** */

const Login=async(req,res,next)=>{
    const email=req.body.email
    const password=req.body.password
    const phone=req.body.phone
    const userExist=await Usermodel.findOne({
        email:email,
        phone:phone
    })
    if(!userExist){
        res.status(400).send({message:"User Note exist "})
    }else{
        const compaepwd=await bcrypt.compare(password,userExist.password)
        if(compaepwd){
            let token= jwt.sign({role:userExist.role,username:userExist.username,email:userExist.email},key)
            if(token){
                locltorage('token',token)
                let username=userExist.username
                let email=userExist.userExist
                let phone=userExist.phone
                checroles=await Rolemodel.findOne({
                    _id:userExist.role
                })
                .then(e=>{
                    const datausers={username ,email ,phone ,role:e.name,token}
                    res.status(200).json({messagesuccess: datausers})
                
                })
                .catch(()=>{
                    res.json({message: 'error in role '})
                })
               
                
            }else{
                res.status(400).send("token erroor")
            }
        }else{
            res.status(400).json({message_errorlogin:"password or phone inncorect "})
        }
    }
    
}
                    //**************Get All users*************** */

const AllUsers=async(req,res,next)=>{
    const allUsers=await Usermodel.find();
    if(allUsers){
        res.json(allUsers)
    }else{
        res.status(200).json("not data")
    }
}
                    //**************Ajouter role*************** */

const AddRole=async(req,res)=>{
    const role=new Rolemodel({
        name:req.body.name
    })
    const saverole=await role.save();
    try {
        res.send(saverole)
    } catch (error) {
        res.send("error to add role")
    }

}

module.exports={
    Register,
    Login,
    AddRole,
    AllUsers,
}