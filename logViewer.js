const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'logs');

// Serve log files as an HTML page
const serveLogs = (req, res) => {
    const logFile = path.join(logDir, `${new Date().toISOString().split('T')[0]}.log`);
    fs.readFile(logFile, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('No logs available for today.');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>Logs</h1><pre>${data}</pre>`);
        }
    });
};

module.exports = { serveLogs };
