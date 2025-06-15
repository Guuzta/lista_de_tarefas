const router = require('express').Router()
const TasksController = require('../controllers/tasks')

router.get('/tasks/:id?', TasksController.get)

module.exports = router