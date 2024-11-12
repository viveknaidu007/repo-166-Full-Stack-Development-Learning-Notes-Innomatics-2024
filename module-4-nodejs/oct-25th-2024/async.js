//async fs
const fs=require('fs')

//write
fs.writeFile('asyncFileWrite.txt','this is written asynchronously',(err)=>{
    if(err) throw err;
    console.log('Async write completed')


//read
    fs.readFile('asyncFileWrite.txt','utf-8',(err,data)=>{
        if(err) throw err;
        console.log('Async read:',data)


//append
    fs.appendFile('asyncFileWrite.txt','\n this line is appended asynchronously',(err)=>{
        if(err) throw err;
        console.log('Async append completed')


//rename:
    fs.rename('asyncFileWrite.txt','asyncrenemed.txt',(err)=>{
        if(err) throw err;
        console.log('Async rename completed')


//delete
    fs.unlink('asyncRenemed.txt',(err)=>{
        if(err) throw err;
        console.log('Async file deleetion completed')
    })
    })

    })
    })
})
