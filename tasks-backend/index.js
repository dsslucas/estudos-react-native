//const express = require('express')
const app = require('express')()

// Banco de Dados
const db = require('./config/db')

const consign = require('consign')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

// Tem acesso ao Knex, que possibilita o CRUD
app.db = db

app.listen(3000, () => {
    console.log("Backend executando")
})