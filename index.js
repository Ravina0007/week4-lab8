const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const app = express();

// Define a simple GET route
app.get('/', (req, res) => {
  res.send('Hello Ravina, this is your API server!');
});

const PORT = process.env.PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost: ${PORT}`);
});