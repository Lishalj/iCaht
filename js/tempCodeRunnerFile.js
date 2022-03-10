
    while(!name)
    {
    
        var name = window.prompt("Please..Enter your name to join the chat");
    }

// if((name==null )||(name=='')){
//     window.location.href = 'http://www.google.com';
// }

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