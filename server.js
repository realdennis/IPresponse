let host = process.env.HOST || '0.0.0.0';
let port = process.env.PORT || 8080;
const http = require('http');

function createServer(){
    http.createServer((req,res) => {
        res.writeHead(200);
        res.end(req.connection.remoteAddress);
    }).listen(port,host)
	console.log(`Server running at ${port}`);
}
createServer();
