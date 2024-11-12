// synchronous file handling
const fs=require("fs")

//write
fs.writeFileSync('syncWrite.txt','this is written synchormously')
console.log('synchronous completed')

//read
const data=fs.readFileSync('syncWrite.txt','utf-8')
console.log('Synchronous read:', data)

//append
fs.appendFileSync('synvWrite.txt','\nThis line is appended synchronously')
console.log('synchronous append')

//delete
fs.unlinkSync('syncRenamed.txt')
console.log('Synchronous file deleted')