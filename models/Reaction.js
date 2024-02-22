// Import necessary modules from Mongoose
const { Schema, Types } = require("mongoose");

// Define the schema for reactions
const reactionSchema = new Schema(
  {
    // Define the reactionId field as a MongoDB ObjectId with a default value
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // Define the reactionBody field as a required string with a maximum length of 280 characters
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    // Define the username field as a required string
    username: {
      type: String,
      required: true,
    },
    // Define the createdAt field as a Date with a default value and a getter method to format the date
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (value) {
        // Format the createdAt date as year, month, day, and military time
        const date = new Date(value);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
        const day = date.getDate().toString().padStart(2, "0");
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}`;
      },
    },
  },
  {
    // Define the schema options
    toJSON: {
      getters: true, // Include getters when converting the schema to JSON
    },
    id: false, // Disable the default _id field
  }
);

// Export the reactionSchema for use in other parts of the application
module.exports = reactionSchema;
