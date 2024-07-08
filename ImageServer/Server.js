// server.js

const express = require('express');
const path = require('path');

const app = express();
const port = 5050; // Change this to any port you prefer

// Serve static files (images in this case) from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
