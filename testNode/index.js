const { response } = require('express');
const http = require('http');

const listenServer = (req, res) =>{
    res.writeHead(200);
    console.log("server started..");
    res.end('hello');
}

const server = http.createServer(listenServer);
server.listen(3000);