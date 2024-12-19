const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Uncommon bug: In case of a high load the server may stop responding and the process will hang without any error messages in the console.
//The reason is that the event loop gets blocked.
//Solution: Use async/await or promises for long-running operations