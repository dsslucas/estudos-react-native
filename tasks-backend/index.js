//const express = require('express')
const app = require('express')()

app.get('/', (req, res) => {
    console.log("Func1")
    res.status(200).send("Backend OK")
})

app.listen(3000, () => {
    console.log("Backend executando")
})