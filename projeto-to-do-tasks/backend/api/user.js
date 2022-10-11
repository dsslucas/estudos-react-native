// Necessário para armazenar senhas em modo de criptografia
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const obterHash = (password, callback) => {
        // Faz a criptografia através de um cálculo
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    // Salva o usuário no BD
    const save = (req, res) => {
        obterHash(req.body.password, hash => {
            // Hash calculado na requisição. Aqui vem tudo criptografado
            const password = hash

            // Conecta com o Knex
            app.db('users')
                .insert({ name: req.body.name, email: req.body.email.toLowerCase(), password })
                .then(() => res.status(204).send())
                .catch(e => res.status(400).json(e))
        })
    }

    return { save }
}