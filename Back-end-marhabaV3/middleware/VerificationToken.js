const { json } = require("body-parser")
const jwt=require("jsonwebtoken")
const localStorage=require("local-storage")
const key =process.env.key


const verfytoken=(req,res,next)=>{
    const tokene=req.headers["accecc-to-token"];
    if(!tokene){
        res.status(403).json("a token required or authentification");
    }else{
        const decode=jwt.verify(tokene,key)
        if(decode){
            res.send({msg:"successsss",decode})

        }
        return res.status(401).json("invalid token")
    }
   
    

return next();
}
module.exports=verfytoken
