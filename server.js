const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 8080;
const http = require('http');

const realIP = req => {
  const xForward = req.headers['x-forwarded-for'];
  return xForward ? xForward.split(',')[0] : req.connection.remoteAddress;
};
const serve = () => {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(realIP(req));
    })
    .listen(PORT, HOST);
  console.log(`Server running at ${PORT}`);
};
serve();
