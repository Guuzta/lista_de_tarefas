const router = require('express').Router()
const authentication = require('../middleware/auth')
const webControllers = require('../controllers/web')

router.get('/', authentication, webControllers.listTasks)

router.get('/login', (req,res) => {
    res.render('login', {
        title: 'Login'
    })
})

router.get('/logout', (req,res) => {
    res.clearCookie('token')
    res.redirect('/login')
})

router.get('/register', (req,res) => {
    res.render('register', {
        title: 'Lista de Tarefas'
    })
})

module.exports = router