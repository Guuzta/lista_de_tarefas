const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const dataBase = require('./database/database')
const apiRoutes = require('./routes/api')
const webRoutes = require('./routes/web')

app.use(express.json())

app.use(cors())

app.use('/api', apiRoutes)
app.use('/', webRoutes)

dataBase.connect()

const port = 3000 || process.env.PORT
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`)
})