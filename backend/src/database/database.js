const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

async function connect () {

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Conexão realizada com sucesso ao banco de dados!')
    } catch (error) {
        console.error('Não foi possível se conectar ao banco de dados!', error)
    }

}

module.exports = {
    connect,
}