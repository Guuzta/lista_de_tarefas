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

module.exports = {
    get,
    post,
}