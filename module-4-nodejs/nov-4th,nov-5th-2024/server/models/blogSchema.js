//define 

//Define all feilds use in our application
const mongoose=require('mongoose')

const blogSchema=new mongoose.Schema({
title:{
    type:String,
    required:true,
    unique:true
},
content:{
    type:String,
    required:true
},
imageUrl:{
    type:String
},
author:{
    type:String,
    required:true
}
},{timestamps:true})

module.exports=mongoose.model('Blog',blogSchema)