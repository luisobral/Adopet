
exports.up = function(knex) {
    return knex.schema.createTable('historicos',function(table){
        table.string('id_historico').primary();

        table.string('id_vacinas').notNullable();

        table.foreign('id_vacinas').references('id').inTable('vacinas');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('historicos');
};
