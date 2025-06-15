const tasksModel = require('../models/task')

async function get (req,res) {

    const { id } = req.params
    
    const object = id ? { _id: id } : null

    const tasks = await tasksModel.find(object)

    res.send({
        message: 'sucess',
        tasks
    })

}

async function post (req, res) {

    const { task } = req.body

    const newTask = new tasksModel({ task })

    await newTask.save()

    console.log(task)

    res.send({
        message: 'sucess'
    })

}

async function put (req,res) {

    const { id } = req.params

    const task = await tasksModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        messsage: 'sucess',
        task
    })

}

async function remove (req,res) {

    const { id } = req.params

    const removeTask = await tasksModel.deleteOne({_id: id})

    const message = removeTask.deletedCount ? 'sucess' : 'error'

    res.send({
        message
    })

}

module.exports = {
    get,
    post,
    put,
    remove
}