const router = require('express').Router()
const authentication = require('../middleware/auth')
const webControllers = require('../controllers/web')

require('dotenv').config()

router.get('/', authentication, webControllers.listTasks)

router.get('/login', (req, res) => {

    const isLocalHost = process.env.NODE_ENV === 'development'

    const API_URL = isLocalHost ? 'http://localhost:3000/api/login' : 'https://lista-de-tarefas-iq6a.onrender.com/api/login'


    res.render('login', {
        title: 'Login',
        API_URL
    })
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/login')
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Lista de Tarefas'
    })
})

module.exports = router