const http = require('http');

const requestListener = async (request, response) => {
  response.writeHead(200);
  // Simulate a long-running operation
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080); 
//Solution: Using async/await prevents blocking the event loop