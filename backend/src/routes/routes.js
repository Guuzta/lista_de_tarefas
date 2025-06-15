const router = require('express').Router()
const TasksController = require('../controllers/tasks')

router.get('/tasks/:id?', TasksController.get)

router.post('/tasks/', TasksController.post)

module.exports = router