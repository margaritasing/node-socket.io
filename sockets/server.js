const express = require('express');

const  app = express;
/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})) */

const http = require('http')


const server = http.createServer(app)


server.listen(3000, ()=> {
    console.log("Servidor arrancado")
})

