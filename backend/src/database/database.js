const mongoose = require('mongoose')

async function connect () {

    try {
        await mongoose.connect('mongodb://localhost:27017/todolist')
        console.log('Conexão realizada com sucesso ao banco de dados!')
    } catch (error) {
        console.error('Não foi possível se conectar ao banco de dados!', error)
    }

}

module.exports = {
    connect,
}