const socket = io("http://localhost:8080/");
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
var audio = new Audio('ting.mp3')
const append = (message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.style.height='fit-containt';
    messageElement.style.overflowWrap='break-word';
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement)
    if(position=='left')
    {
        audio.play();
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`,'right')
    socket.emit('send',message);
    messageInput.value="";
})

var name =prompt("Enter your name to join the chat");
// function notri()
// {
while(!name)
    {
    
        name = prompt("Please, Enter your name to join the chat");
    }
//     return name
// }
// if(name)
// { 
//    notri()
   socket.emit('new-user-joined',name);

   
    socket.on('user-joined', name =>{
        append(`${name} joined the chat`, 'right');
    })

    socket.on('receive', data =>{
        append(`${data.name} : ${data.message}`, 'left');
    })

    socket.on('leave', name =>{
        append(`${name} left the chat`, '');
    })   
// }

    // else
    // {
    //     window.location.href =' http://www.google.com';
    // }
 
// if((name==null )||(name=='')){
//     window.location.href = 'http://www.google.com';
// }


// }