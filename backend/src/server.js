const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Olá, mundo!')
})

const port = 3000 || process.env.PORT
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`)
})