
exports.up = function(knex) {
    return knex.schema.createTable('racas',function(table){
        table.increments();
        table.string('nome_raca').notNullable();
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTable('racas');
  };
  