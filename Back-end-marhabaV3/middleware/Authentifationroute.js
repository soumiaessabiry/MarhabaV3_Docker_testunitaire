const jwt=require("jsonwebtoken")
const key =process.env.key

module.exports=(req,res,next)=>{
    try {
        // res.send("hello")
        // recupere token par front 
        // res.send(req)
        // decoer token 
        // recupere userrole
        // console.log(req.headers)
const token =req.headers.authorization.split(".");
console.log(token)
    next()
    } catch (error) {
      res.status(401).json({error})  
    }
}