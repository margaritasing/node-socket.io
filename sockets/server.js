const express = require('express');
const  app = express();

const http = require('http');

const server = http.createServer(app);



server.listen(3000)

app.use(express.static('public'));

const { Server } = require("socket.io");
const io = new Server(server);
  
/* 
app.get('/', (req, res) => {
    res.sendFile('public' + '/index.html');
  }); */

  io.on('connection', (socket) => {
    console.log('nueva conexion id: ' + socket.id);

    io.on('evento', ()=>{});

    io.emit('evento2', datos)
  });




