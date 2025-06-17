const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})

const Model = mongoose.model('users', userSchema)

module.exports = Model