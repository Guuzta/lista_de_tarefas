const jwt = require('jsonwebtoken')
require('dotenv').config()
const path = require('path')

function auth (req,res) {

    const token = req.headers.authorization?.split(' ')[1]

    if(!token) {
        return res.json({
            message: 'Acesso negado, Token inválido!'
        })
    }

    try {
        console.log(token)
        jwt.verify(token, process.env.SECRET)
        res.sendFile(path.join(__dirname, '../private/todolist.html'))
    } catch (error) {
        return res.json({
            message: `Token inválido! ${error}`
        })
    }

}

module.exports = auth