const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: function(value) {
                // Format the createdAt date as year, month, day, and military time
                const date = new Date(value);
                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
                const day = date.getDate().toString().padStart(2, '0');
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                return `${year}-${month}-${day} ${hours}:${minutes}`;
            }
        },
        username:{
            type: String,
            required: true,
        },
        reactions:[reactionSchema]
    },
    {
        toJSON:{
            getters:true,
            virtuals: true
        },
        id: false
    }
)

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema)

module.exports = Thought