const express = require('express')
const app=express()
const router = express.Router()  // syntax of router


router.use((req,res,next)=>{
    console.log('Router level middleware')
    next()
})


router.get('/',(req,res)=>{
    console.log('Welcome to router page')
    res.send('Get method example')
})

router.get('/about',(req,res)=>{
    console.log('welcome to about us page')
    res.send('about us page')
})

router.get('about/one',(req,res)=>{
    res.send('Nested routes')
})

app.use('/info',router)
app.listen(3200,()=>{
    console.log('server is running')
})