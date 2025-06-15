const express = require('express')
const cors = require('cors')

const app = express()

const dataBase = require('./database/database')

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Olá, mundo!')
})

dataBase.connect()

const port = 3000 || process.env.PORT
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`)
})