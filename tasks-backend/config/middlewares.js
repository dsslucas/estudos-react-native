// Middlewares que são chamados por padrão

// Faz parse no corpo da requisição
const bodyParser = require('body-parser')

// Habilita requisições de origens diferentes
const cors = require('cors')

module.exports = app => {
    app.use(bodyParser.json())

    app.use(cors({
        origin: '*'
    }))
}
