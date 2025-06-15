const mongoose = require('mongoose')

const { Schema } = mongoose

const taskSchema = new Schema({
    task: String
})

const Model = mongoose.model('tasks', taskSchema)

module.exports = Model