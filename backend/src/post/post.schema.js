const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    avatar:{type:String,required:true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
)

const Post = mongoose.model("post", postSchema)

module.exports = Post;