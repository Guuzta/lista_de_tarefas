const jwt = require('jsonwebtoken')
require('dotenv').config()
const path = require('path')

function auth (req,res,next) {

    const token = req.cookies.token

    if(!token) {
        return res.redirect('/login')
    }

    try {
        const dataUser = jwt.verify(token, process.env.SECRET)
        req.user = dataUser
        next()
    } catch (error) {
        return res.redirect('/login')
    }

}

module.exports = auth