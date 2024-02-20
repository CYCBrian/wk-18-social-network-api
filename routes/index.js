// Import necessary modules from Express
const router = require("express").Router();
// Import the API routes from the api file
const apiRoutes = require("./api");

// Middleware to handle routes starting with /api
router.use("/api", apiRoutes);

// Default route handler for routes other than /api
router.use((req, res) => res.send("Wrong route!"));

// Export the router for use in the main application file
module.exports = router;
