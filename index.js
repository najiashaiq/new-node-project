const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain');

  
  if (req.url === '/') {
    res.end('Home Page\n'); 
  } else if (req.url === '/about') {
    res.end('About Page\n'); 
  } else if (req.url === '/contact') {
    res.end('Contact Page\n'); 
  } else {
    res.statusCode = 404; 
    res.end('404 Not Found\n'); 
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});