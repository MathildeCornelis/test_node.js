const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
    {
        message: {
            type: String, 
            required: true,
        },
        author: {
            type: String,
            require: true,
        },
        likers: {
            type: [String],
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('post', postSchema);