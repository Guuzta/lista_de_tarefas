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


module.exports = {
    get,
}