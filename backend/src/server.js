const express = require('express')
const cors = require('cors')

const app = express()

const dataBase = require('./database/database')
const routes = require('./routes/routes')

app.use(express.json())

app.use('/api', routes)

dataBase.connect()

const port = 3000 || process.env.PORT
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`)
})