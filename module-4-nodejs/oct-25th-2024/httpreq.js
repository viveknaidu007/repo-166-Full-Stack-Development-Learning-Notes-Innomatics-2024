// building Http requests
const http=require('http')

//create Http server
const server=http.createServer((req,res)=>{
    //set the response
    res.writeHead(200,{'content-Type':'text/html'})


    //handle route
    if(req.url==='/'){
        res.write('<h1>Welcome to Home page...</h1>')
    }
    else if(req.url==='/about'){
        res.write('<h1>About us page...</h1>')
    }
    else if(req.url==='/contact'){
        res.write('<h1>contact us page...</h1>')
    }
    else{
        res.write('<h1>404.Page not found</h1>')
    }
    //end response
    res.end()
})
server.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000')
})