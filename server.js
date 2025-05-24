const http = require('http');
const fs = require('fs');
const path = require('path');

//const PORT = process.env.PORT || 3000;

const PORT = process.env.PORT || 80;

const server = http.createServer((req, res) => {
  // Serve index.html for the root path
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'public', 'index.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error: ${err.code}`);
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf8');
    });
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});