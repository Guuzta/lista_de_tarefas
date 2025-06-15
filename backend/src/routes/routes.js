const router = require('express').Router()
const TasksController = require('../controllers/tasks')
const AuthenticationController = require('../controllers/authentication')

router.get('/tasks/:id?', TasksController.get)

router.post('/tasks/', TasksController.post)

router.put('/tasks/:id', TasksController.put)

router.delete('/tasks/:id', TasksController.remove)

router.post('/register', AuthenticationController.registerUser)

module.exports = router