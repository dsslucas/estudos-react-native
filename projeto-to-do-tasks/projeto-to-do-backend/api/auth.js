const { authSecret } = require('../.env')

const jwt = require('jwt-simple')

// Vai ser necessário para comparar a senha
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        // Não tem email ou senha
        if (!req.body.email || !req.body.password) {
            return res.status(400).send("Dados incompletos")
        }

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (user) {
            // Compara as senhas "crua" com a criptografada
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err | !isMatch) res.status(401).send()

                const payload = { id: user.id }

                // Resposta quando tiver email, usuário e senha válida no BD
                res.json({
                    user: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecret)
                })
            })
        }

        // Caso não esteja válido
        else {
            res.status(400).send("Email não encontrado!")
        }
    }

    return { signin }
}