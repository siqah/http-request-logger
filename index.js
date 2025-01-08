const http = require('http');
const {logRequest, rotateLogsDaily} = require('./logger');
const {serveLogs} = require('./logViewer');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/logs'){
        serveLogs(req, res); //serve log files
    }else {
        logRequest(req) //log request
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Request logged');
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    rotateLogsDaily(); //Ensure logs are rotated daily
})