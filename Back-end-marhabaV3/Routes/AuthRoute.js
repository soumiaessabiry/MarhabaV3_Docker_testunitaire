const express=require("express")
const router=express.Router()
const {Register,Login,AddRole} =require("../Controllers/AuthController")

router.get("/Register",Register)
router.get("/Login",Login)
router.get("/AddRole",AddRole)


module.exports=router