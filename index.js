// Import necessary modules
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Get the current working directory
const cwd = process.cwd();

// Set the default port to 3001 or use the environment variable PORT
const PORT = process.env.PORT || 3001;
// Create an instance of the Express application
const app = express();

// Middleware to parse URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Use the defined routes for the application
app.use(routes);

// Once the database connection is open, start the Express server
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
