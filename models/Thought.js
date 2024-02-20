const {Schema, model} = require('mongoose')

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: function() {
                const date = new Date();
                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                return `${year}-${month}-${day} ${hours}:${minutes}`;
            },
            get: function(value) {
                return value; // Getter function to return the formatted date
            }
        },
        username:{
            type: String,
            required: true,
        },
        reactions:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ]
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