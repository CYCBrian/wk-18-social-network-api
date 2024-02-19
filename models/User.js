//require in the necessary function from the 'mongoose' package
const { Schema, model } = require('mongoose');

//create a schema for users
const userSchema = new Schema(
    {
        // Define the 'username' field with specified properties        
        username:{
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        // Define the 'email' field with specified properties and validation
        email:{
            type: String,
            unique: true,
            required: true,
            validate: function (v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
            },
        },
        // Define the 'thoughts' field as an array of ObjectIds referencing the 'Thought' model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref:'Thought',
            }
        ],
        // Define the 'friends' field as an array of ObjectIds referencing the 'User' model (self-reference)
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        // Define the schema options
        toJSON:{
            virtuals: true,
        },
        id: false,
    }
);

// Define a virtual field 'friendCount' to calculate the number of friends for a user
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Create the 'User' model using the schema
const User = model('user', userSchema)

// Export the 'User' model
module.exports = User;