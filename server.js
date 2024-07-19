const http = require('http');

// Define the hostname and port
const hostname = '0.0.0.0';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body
  res.end('Hello World\n');
});

// Make the server listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
