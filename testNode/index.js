const http = require('http');

const requestListener = (req, res) => {
    if(req.url === '/profile') {
      res.writeHead(200);
      res.end('Welcome to your profile!');
    } else {
      res.writeHead(200);
      res.end('Hello, World!');
    }
  };

const server = http.createServer(requestListener);
server.listen(3000);