const userModel = require('../models/user')
const bcrypt = require('bcrypt')

async function registerUser(req, res) {

    const {
        name,
        email,
        password
    } = req.body

    try {

        const userExists = await userModel.findOne({
            $and: [
                { name: name },
                { email: email }
            ]
        })

        if (userExists) {
            return res.send({
                message: 'Esse usuário ja está cadastrado!',
                succeed: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
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

async function loginUser(req, res) {

    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.send({
                message: 'Usuário não encontrado!',
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            res.send({
                message: 'Senha inválida, tente novamente!' 
            })
        }

        res.send({
            message: `Usuário encontrado! Seja bem-vindo ${user.name}!`
        })

    } catch (error) {
        res.send({
            message: 'Erro no servidor!'
        })
    }

    

}

module.exports = {
    registerUser,
    loginUser
}