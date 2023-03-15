const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000; 

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    fs.readFile('./views/index.html', 'utf-8', (err, data) => {
        if (err) throw err 
        const query = url.parse(req.url, true).query; 
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        data = data.replace("{{name}}", query.name)
        res.end(data);
    })
});

server.listen(port, () => {
    console.log(`Serveur running at http://localhost:${port}/`);
}); 



