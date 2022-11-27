const express=require("express")
const router=express.Router()
const verftoken=require("../middleware/VerificationToken")
const {Register,Login,AddRole,AllUsers} =require("../Controllers/AuthController")
 


router.get("/",(req,res)=>{
    res.send("welcom can logiin  please")
}) 
router.post("/Register",Register)
router.post("/Login",Login)
router.get("/users",verftoken,AllUsers)





module.exports=router