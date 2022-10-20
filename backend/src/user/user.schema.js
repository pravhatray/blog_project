const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["User", "Writer", "Admin"], required: true }
})

const User = mongoose.model("user", userSchema);

module.exports = User;