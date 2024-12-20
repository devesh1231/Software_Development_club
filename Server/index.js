// index.js

// Import express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World! Server is running on port 3000');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
