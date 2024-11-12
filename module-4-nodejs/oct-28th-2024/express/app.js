const express = require('express')
const app = express()

//first M.W
app.use('/',(req,res,next) => {
    console.log('hello this is first res')
    next()
})

//second mw
app.use('/',(req,res,next) =>{
    console.log('second middleware')
    next()
})

//third MW
app.use('/',(req,res,next)=>{
    console.log('third MW')
})


app.listen(3000,()=>{
    console.log('server is running')
})