const mongoose=require('mongoose')

const eventSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        minlength:[3,"Name must contain at least 3 characters!"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        match:[/\S+@\S+\.\S+/,"Please provide a valid email address"]
    },
    subject:{
        type:String,
        required:[true,"Subject is required"],
        minlength:[5,"Subject must contain atleast 5 characters!"]
    },
    message:{
        type:String,
        required:[true,"Message is required"],
        minlength:[10,"Message must contain atleast 10 characters!"]
    }
})
module.exports=mongoose.model('Event',eventSchema)