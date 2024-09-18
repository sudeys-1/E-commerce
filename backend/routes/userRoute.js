const express = require("express")
const router  = express.Router()
const Login = require("../model/Login")


 
// API POST 
router.post("/user/register", async (req, res) =>{   
    const Newuser = Login(req.body)
    const Saveuser = await Newuser.save()
    if (Saveuser){
        res.send("user Added  seccssefully ")
    }
})


// API Log In 
router.post("/user/login" , async (req,res)=>{
    const userLogIn = await Login.findOne(req.body)
    if(userLogIn){
        res.send({success:"Login Successfully",userLogIn })
    }else{
        res.send({error:"user Not Found"})
    }
})




module.exports =router
