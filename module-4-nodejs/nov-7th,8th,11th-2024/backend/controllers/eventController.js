const Event=require('../models/eventSchema')

//Controller function to send a message
exports.sendMessage=async(req,res)=>{
    try{
        const{name,email,subject,message}=req.body;
        
        //Basic validation
        if(!name || !email ||!subject ||!message){
            return res.status(400).json({success:false,message:'All feilds are required'})
        }
        await Event.create({name,email,subject,message});
        res.status(200).json({success:true,message:'Message sent successfully'})
    }catch(err){
        console.log('Error in posting the data',err)
    }
}