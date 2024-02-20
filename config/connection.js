// Import necessary modules from Mongoose
const { connect, connection } = require("mongoose");

// Define the MongoDB connection string, using the provided environment variable or a default local connection
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/smbeapiDB";

// Connect to the MongoDB database using the defined connection string
connect(connectionString);

// Export the Mongoose connection object for use in other parts of the application
module.exports = connection;
