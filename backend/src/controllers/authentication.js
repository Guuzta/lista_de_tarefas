const userModel = require('../models/user')

async function registerUser(req, res) {

    const {
        name,
        password
    } = req.body

    try {

        const userExists = await userModel.findOne({ name })

        if (userExists) {
            return res.send({
                message: 'Esse usuário ja está cadastrado!'
            })
        }

        const newUser = new userModel({
            name,
            password
        })

        await newUser.save()

        res.send({
            message: 'Usuário cadastrado com sucesso!'
        })

    } catch (error) {
        res.send({
            message: 'Erro no servidor!'
        })
    }


}

module.exports = {
    registerUser
}