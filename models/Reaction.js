const {Schema, Types} = require('mongoose')

const reactionSchema = new Schema(
    {
        reactionId:{
            type:Schema.Types.ObjectId,
            default:() => new Types.ObjectId(),
        },
        reactionBody:{
            type: String,
            required: true,
            maxlength: 280,
        },
        username:{
            type: String,
            required: true,
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
    },
    {
        toJSON:{
            getters: true
        },
        id: false
    }
)

module.exports = reactionSchema