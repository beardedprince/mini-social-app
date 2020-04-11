const mongoose = require('mongoose')

const postData = new mongoose.Schema({
    message: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('posts', postData)