const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
    {
        username: {
            type:String,
            unique:true,
            required:true,
            trim:true
        },
        email: {
            type:String,
            required:[true, "Email required"],
            unique:true, 
            match: [
            //    REGEX Validates the Correct Email ==========================
               /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            ]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId, 
                ref:'Thoughts'
            }
        ],
        friends:[
            {
                type: Schema.Types.ObjectId,
                ref:'Users'
            }
        ]
    },
    {
        toJSON:{
            virtuals: true,
            getters:true,
        },
        id: false
    }
);

// Gets the total count of Friends
UsersSchema.virtual('friendCount').get(function() {
    console.log(this)
    return this.friends.length;
})

// Creates the Users model using the UserSchema
const User = model('Users', UsersSchema);

module.exports = User; 