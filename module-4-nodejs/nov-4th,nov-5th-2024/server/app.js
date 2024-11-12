const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
require('dotenv').config()
const cors=require('cors')
const blogRoutes=require('./routes/blogRoutes')

const port=process.env.PORT
const mongoUri=process.env.MONGODB_URI;

mongoose.connect(mongoUri)
                .then(()=>console.log('connection established successfully'))
                .catch((err)=>console.log('Error in establishing connection',err))

 app.use(bodyParser.json())
 app.use(cors())
 
 app.use('/api/blogs',blogRoutes)

 app.listen(port,()=>{
    console.log(`Server is runing at ${port}`)
 })