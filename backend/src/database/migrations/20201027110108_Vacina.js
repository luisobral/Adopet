
exports.up = function(knex) {
    return knex.schema.createTable('vacinas',function(table){
        table.increments();
        table.string('nome_vacinas').notNullable();
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('vacinas');
};
