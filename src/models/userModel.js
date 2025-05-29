const mongoose = require("mongoose")

const listUser = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posts: {
        type: Array,
        required: true
    }
})

const User = mongoose.model("User", listUser)
module.exports = User