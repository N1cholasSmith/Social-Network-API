const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type:String,
            required:true,
            maxLength: 280,
            minlength: 1,
            
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: ( createdAt ) => dateFormat( createdAt )
        },
        username: {
            type:String,
            required:true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals:true,
            getters: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });