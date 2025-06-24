const tasksModel = require('../models/task')

async function listTasks(req, res) {
    const { userId, userName } = req

    const tasks = await tasksModel.find({ userId })

    res.render('index', {
        user: userName,
        userId,
        message: 'mensagem personalizada!',
        tasks
    })
}

module.exports = {
    listTasks
}