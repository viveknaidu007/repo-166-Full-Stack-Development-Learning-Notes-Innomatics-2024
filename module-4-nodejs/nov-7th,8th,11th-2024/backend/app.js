const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const eventRoute=require('./routes/eventRoute')
require('dotenv').config()

const PORT=process.env.PORT
//middlewares
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.log('Error in establishng a connection',err))

app.use('/api/v1',eventRoute)
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
