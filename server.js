const http = require('http');

const server = http.createServer((rep, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Hello world</h1>');
});

const port = 3000; 
server.listen(port, () => {
    console.log(`Serveur running at http://localhost:${port}/`);
});
