const http = require('http');

// Server URL
const serverUrl = 'http://localhost:3000';

// Function to send a GET request
function sendGetRequest(path) {
  http.get(`${serverUrl}${path}`, (res) => {
    console.log(`GET ${path}: Status Code: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`Error with GET ${path}: ${err.message}`);
  });
}

// Function to send a POST request
function sendPostRequest(path, data) {
  const options = {
    method: 'POST',
    hostname: 'localhost',
    port: 3000,
    path,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data),
    },
  };

  const req = http.request(options, (res) => {
    console.log(`POST ${path}: Status Code: ${res.statusCode}`);
  });

  req.on('error', (err) => {
    console.error(`Error with POST ${path}: ${err.message}`);
  });

  req.write(data);
  req.end();
}

// Function to simulate multiple requests
function simulateRequests() {
  console.log('Starting request simulation...');
  
  // Send GET requests
  sendGetRequest('/');
  sendGetRequest('/logs');
  sendGetRequest('/nonexistent');

  // Send POST requests
  const postData = JSON.stringify({ message: 'Hello, server!' });
  sendPostRequest('/submit', postData);
  sendPostRequest('/api/data', JSON.stringify({ key: 'value' }));

  console.log('Requests sent. Check your logs for results.');
}

// Start simulation
simulateRequests();
