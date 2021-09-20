//entry point
// this file will hold the listen(port)
const http = require('http');
const app = require('./lib/app');

const server = http.createServer(app);

server.listen(7890);
