const express=require('express')
const jwt=require('jsonwebtoken')
const authMiddleware=require('../middleware/authMiddleware')
const router=express.Router()

//Mock Data
const user={id:1,username:'testuser',password:'password123'}

router.post('/login',(req,res)=>{
    const{username,password}=req.body;
    if(username===user.username && password===user.password){
        const token=jwt.sign({id:user.id,username:user.username},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRATION,})
        res.json({message:'Login successful',token})
    }else{
        res.status(401).json({message:'Invalid credential'})
    }
})
//protected route
router.get('/dashboard',authMiddleware,(req,res)=>{
    res.json({message:`Welcome to dashboard dude, ${req.user.username}!`})
})
module.exports=router