let host = process.env.HOST || '0.0.0.0';
let port = process.env.PORT || 8080;
const http = require('http');

function thisIP(req){
	let forwardIP = req.headers['x-forwarded-for']; 
	if(forwardIP){
		let forwardedIps = forwardIP.split(',');
		ipAddress = forwardedIps[0];
	}else{
		ipAddress = req.connection.remoteAddress;
	}
	return ipAddress;
}

function createServer(){
    http.createServer((req,res) => {
        res.writeHead(200);
        res.end(thisIP(req));
    }).listen(port,host)
	console.log(`Server running at ${port}`);
}
createServer();
