const fs = require('fs');
const path = require('path');
const {getTimestamp} = require('./utils');

const logDir = path.join(__dirname, 'logs');

// Ensure log directory exists
if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

//get the current log file name(daily rotation)
const currentLogFile = () => path.join(logDir, `${new Date().toISOString().split('T')[0]}.log`);

//log request to the current file 

const logRequest = (req) => {
    const logEntry =  `[${getTimestamp()}] ${req.method} ${req.url} ${JSON.stringify(req.headers)}\n`
    fs.appendFile(currentLogFile(), logEntry, (err) => {
        if(err) console.error(`Failed to log request: ${err.message}`);
    });
    
};

//rotate logs daily by creating a new log file

const rotateLogsDaily = () => {
    setInterval(() => {
        const newLogFile = currentLogFile();
        if(!fs.existsSync(newLogFile)) {
            fs.writeFileSync(newLogFile, ''); //create new log file
        }
    } , 24 * 60 * 60 * 1000); //rotate logs daily
}

module.exports = {logRequest, rotateLogsDaily};