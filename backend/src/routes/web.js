const router = require('express').Router()
const authorization = require('../middleware/auth')

router.get('/', authorization, (req,res) => {
    res.render('index', {
        user: req.user,
        message: 'mensagem personalizada!'
    })
})

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