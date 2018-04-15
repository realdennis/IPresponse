const http = require('http');
let port = 8080;

function createServer(){
    http.createServer((req,res) => {
        res.writeHead(200);
        res.end(req.connection.remoteAddress);
    }).listen(port,'0.0.0.0')
	console.log(`Server running at ${port}`);
}

createServer();