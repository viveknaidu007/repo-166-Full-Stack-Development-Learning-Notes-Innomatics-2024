const socket=io();
const form=document.getElementById('form')
const myname=document.getElementById('myname')
const message=document.getElementById('message')
const messageArea=document.getElementById('messageArea')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(myname.value && message.value){
        socket.emit('send name',myname.value);
        socket.emit('send message',message.value);
        message.value='';
    }
})
socket.on('send name',(username)=>{
    const name=document.createElement('p')
    name.textContent=`${username}:`;
    name.className='username';
    messageArea.appendChild(name)
})
socket.on('send message',(chat)=>{
    const chatContent=document.createElement('p')
    chatContent.textContent=chat;
    chatContent.className='message'
    messageArea.appendChild(chatContent)
})