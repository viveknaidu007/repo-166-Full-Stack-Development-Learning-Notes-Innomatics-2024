
const express=require('express')
const app=express()
const http=require('http')
const {Server}=require('socket.io')
const server=http.createServer(app)
const io=new Server(server)
const port=4000

//connect to public folder
app.use(express.static('public'))

//set up routes
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/../public/index.html')
})

//Handle socket.io
io.on('connection',(socket)=>{
    console.log('A user is connected')

    //broadcast name whn received msg
    socket.on('send name',(username)=>{
        io.emit('send name',username)
    });
//broadcast msg when received
    socket.on('send message',(chat)=>{
        io.emit('send message',chat)
    });
    socket.on('disconnect',()=>{
        console.log('User disconnected')
    })
})
server.listen(port,()=>{
    console.log(`Sever is running at ${port}`)
})