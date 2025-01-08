# HTTP Request Logger

## Description
This is a simple Node.js application that logs all incoming HTTP requests to a file and serves these logs through a web interface.

for testing run the index file from seperate terminal that you are running the testLogger file then visit
http://localhost:3000/logs to see the file 

## Features
- Logs request method, URL, headers, and timestamp.
- Saves logs to a daily rotating file.
- Provides a web page to view the logs.

## Directory Structure
```plaintext
http-request-logger/
├── index.js           # Main entry point for the server
├── logger.js          # Handles logging logic
├── logViewer.js       # Handles serving logs as a web page
├── utils.js   
|---testLogger.j       # use for testing      functions
├── logs/              # Directory to store log files
└── README.md          # Project documentation
