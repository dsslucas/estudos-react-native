//Tudo aqui é feito. Cria tabela
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
    })
};

// Exclui tabela
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
