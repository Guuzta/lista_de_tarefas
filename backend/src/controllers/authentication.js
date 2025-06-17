const userModel = require('../models/user')

async function registerUser(req, res) {

    const {
        name,
        email,
        password
    } = req.body

    try {

        const userExists = await userModel.findOne({
            $and: [
                {name: name},
                {email: email}
            ]
        })

        if (userExists) {
            return res.send({
                message: 'Esse usuário ja está cadastrado!',
                succeed: false
            })
        }

        const newUser = new userModel({
            name,
            email,
            password
        })

        await newUser.save()

        res.send({
            message: 'Usuário cadastrado com sucesso!',
            succeed: true
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