const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(cors())
app.use(express.json())
app.use(cookieParser())


const dataBase = require('./database/database')
const apiRoutes = require('./routes/api')
const webRoutes = require('./routes/web')

app.use('/api', apiRoutes)
app.use('/', webRoutes)

dataBase.connect()

const port = 3000 || process.env.PORT
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`)
})