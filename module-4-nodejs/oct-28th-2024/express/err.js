const express = require('express')
const app=express()

//error handling
const errorHandling = (err,req,res,next)=>{
    console.log(err.stack)
    res.stack(500).send('something went wrong here ...........')
}

app.use((req,res,next)=>{
    throw new Error('something broke')
})

app.use(errorHandling)
app.listen(4000,()=>{
    console.log('Server is running')
})
