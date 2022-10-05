const moment = require('moment')

module.exports = app => {
    // Feito em cima de uma requisição GET
    const getTasks = (req, res) => {
        // Pega a data. Ou vem na Query, ou o Moment calcula
        const date = req.query.date ? req.query.date : moment().endOf('day').toDate()

        app.db('tasks')
            .where({ userId: req.user.id })
            .where('estimateAt', '<=', date) // Condição lógica da data estimada menor do que foi calculada
            .orderBy('estimateAt')
            .then(tasks => res.json(tasks)) // Manda um json como resposta
            .catch(err => res.status(400).json(err))
    }

    // Salva a task, POST
    const save = (req, res) => {
        // Validação da task. Trim conta espaços vazios
        if (!req.body.desc.trim()) res.status(400).send("Descrição é um campo obrigatório")

        req.body.userId = req.user.id

        // Inserção
        app.db('tasks')
            .insert(req.body)
            .then(() => res.status(204).send("Task enviada!"))
            .catch(err => res.status(400).json(err))
    }

    // Exclui a task, DELETE
    const remove = (req, res) => {
        app.db('tasks')
            // Encontra na task o id e o ID correspondente APENAS ao usuário
            .where({ id: req.params.id, userId: req.user.id })
            .del()
            .then(rowsDeleted => {
                if (rowsDeleted > 0) {
                    res.status(204).send()
                }
                else {
                    const msg = `Não foi encontrada task com id ${req.params.id}`
                    res.status(400).send(msg)
                }
            })
            // Caso ocorra um erro dentro do BD (string violada, etc etc)
            .catch(err => res.status(400).json(err))
    }

    // Alterna o estado de doneAt. Não será exportado.
    const updateTaskDoneAt = (req, res, doneAt) => {
        app.db('tasks')
            .where({ id: req.params.id, userId: req.user.id })
            .update({ doneAt })
            .then(() => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    // Alternância para concluído/pendente. Mesmo do frontend
    const toggleTask = (req, res) => {
        app.db('tasks')
            .where({ id: req.params.id, userId: req.user.id })
            .first()
            .then(task => {
                // Lógica se vai apagar o doneAt ou se vai preencher com a data atual

                // Se não tiver
                if (!task) {
                    const msg = `Task com id ${req.params.id} não encontrada.`
                    res.status(400).send(msg)
                }

                // Se for válido, retorna nulo. Caso contrário, gera um date()
                const doneAt = task.doneAt ? null : new Date()

                updateTaskDoneAt(req, res, doneAt)
            })
            .catch(err => res.status(400).json(err))
    }

    return { getTasks, save, remove, toggleTask }
}