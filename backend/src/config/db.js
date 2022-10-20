const mongoose = require("mongoose")
const Connect = () => {
    return mongoose.connect("mongodb+srv://kabir:kabir@cluster0.fbyvlsa.mongodb.net/bloggers")
}

module.exports = Connect;