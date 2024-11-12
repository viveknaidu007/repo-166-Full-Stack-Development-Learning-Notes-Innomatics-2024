const express = require('express')
const app = express()
const path = require('path')
const port = 5000

// set ejs as the view engine
app.set('view engine', 'ejs')

//set the directory of the views
app.set('views',path.join(__dirname, 'views'))

//routes
app.get('/',(req,res)=>{
    res.render('index', {title:'Home page', message:'Welcome to my Home page'})
})

app.get('/about',(req,res)=>{
    res.render('about',{heading:'about page', msg:'welcome to about us page'})
})

app.listen(port,()=>{
    console.log('Server is running at port')
})

