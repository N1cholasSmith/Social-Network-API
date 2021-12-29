const { Schema, model } = require('mongoose');

const reactionSchema = Schema(
    {
        reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,   
          get: createdAt => dateFormat( createdAt )
        }
      },
      {
        toJSON: 
        {
          getters: true
        }
      }
);