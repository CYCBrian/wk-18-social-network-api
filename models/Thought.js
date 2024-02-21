// Import necessary modules from Mongoose
const { Schema, model } = require("mongoose");
// Import the reactionSchema for nested reactions
const reactionSchema = require("./Reaction");

// Define the schema for thoughts
const thoughtSchema = new Schema(
  {
    // Define the thoughtText field as a required string with a maximum length of 280 characters
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
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
    // Define the username field as a required string
    username: {
      type: String,
      required: true,
    },
    // Define the reactions field as an array of nested reaction documents
    reactions: [reactionSchema],
  },
  {
    // Define the schema options
    toJSON: {
      getters: true, // Include getters when converting the schema to JSON
      virtuals: true, // Include virtual fields when converting the schema to JSON
    },
    // id: false, // Disable the default _id field
  }
);

// Define a virtual field 'reactionCount' to calculate the number of reactions for a thought
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Create the Thought model using the schema
const Thought = model("thought", thoughtSchema);

// Export the Thought model for use in other parts of the application
module.exports = Thought;
