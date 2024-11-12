require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
const mainRoutes=require('./routes/mainRoutes')
const app=express()
const PORT=process.env.PORT

app.use(bodyParser.json())
app.use('/',mainRoutes)
app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`))