const express = require('express');
const app = express();
const socket = require('socket.io')

let port = 3000

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))


app.use(require('./routes/index'));
app.use(require('./routes/albums'));
app.use(require('./routes/chatbot'));
app.use(require('./routes/chatroom'));

let server = app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);

})

let io = socket(server)

io.on('connection', (socket)=>{

    socket.emit('msgFromServer', "Welcome to the chat room!")

    socket.on('msgFromClient', clientMsg=>{

        io.emit('msgFromServer', clientMsg)
    })

    console.log('A client has connected');

    socket.on('disconnect', reason=>{
        console.log('user hs left the room');

        io.emit('msgFromServer', "User has left the Room")
    })
})



