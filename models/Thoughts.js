const { Schema, model, Types, } = require('mongoose');
const moment = require('moment')

// REACTION SCHEMA =====================================================================
const ReactionsSchema = new Schema(
    {
        reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
            minLength: 1,
        },
        username: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: new Date ()   
        }
      },
      {
        toJSON: 
        {
          getters: true
        }
      }
);

// THOUGHT SCHEMA =================================================================
const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type:String,
            required:true,
            maxLength: 280,
            minlength: 1,
            
        },
        createdAt: {
            type: Date,
            default: new Date ()    
          },
        username: {
            type:String,
            required:true,
        },
        // uses ReactionsSchema to validate the data
        reactions: [ReactionsSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

// Gets the total count of Reactions
ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Creates the thoughts model using the ThoughtsSchema
const Thoughts = model('Thoughts', ThoughtsSchema )

module.exports = Thoughts;