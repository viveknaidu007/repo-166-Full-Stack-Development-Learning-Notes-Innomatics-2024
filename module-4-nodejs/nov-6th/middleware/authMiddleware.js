const jwt=require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
    const token=req.headers['authorization'].split(' ')[1];
    if(!token) return res.status(403).json({message:'Token is required'})

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return res.status(401).json({message:'Invalid Token'})
            req.user=user;
            next()
    })

}

module.exports=authMiddleware