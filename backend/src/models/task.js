const mongoose = require('mongoose')

const { Schema } = mongoose

const taskSchema = new Schema({
    description: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    }
})

const Model = mongoose.model('tasks', taskSchema)

module.exports = Model