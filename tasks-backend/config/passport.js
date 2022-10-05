const { authSecret } = require('../.env')

// Arquivo de segurança
const passport = require('passport')
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt

module.exports = app => {
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }

    const strategy = new Strategy(params, (payload, done) => {
        app.db('users')
            .where({ id: payload.id })
            .first() // Pega o primeiro usuário
            .then(user => {
                if (user) {
                    // Aqui começa o passport
                    done(null, { id: user.id, email: user.email })
                }
                else {
                    // Neste caso, o usuário não foi autenticado
                    done(null, false)
                }
            })
            // Houve erro, também não foi autenticado
            .catch(err => done(err, false))
    })

    passport.use(strategy)

    return {
        initialize: () => passport.initialize(),
        // Estatégia de autenticação por JWT e seção falsa
        authenticate: () => passport.authenticate('jwt', { session: false })
    }
}
