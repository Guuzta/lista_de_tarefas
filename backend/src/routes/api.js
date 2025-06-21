const router = require('express').Router()
const TasksController = require('../controllers/tasks')
const AuthenticationController = require('../controllers/authentication')
const authorization = require('../middleware/auth')

router.get('/tasks/:id?', TasksController.get)

router.post('/tasks/', TasksController.post)

router.put('/tasks/:id', TasksController.put)

router.delete('/tasks/:id', TasksController.remove)

router.post('/register', AuthenticationController.registerUser)

router.post('/login', AuthenticationController.loginUser)



module.exports = router