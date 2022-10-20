const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comments: { type: String, required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
},

    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
)

const Comment = mongoose.model("comment", CommentSchema)

module.exports = Comment;