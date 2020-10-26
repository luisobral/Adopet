
exports.up = function(knex) {
    return knex.schema.createTable('racas',function(table){
        table.increments();
        table.string('nome').notNullable();
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTable('racas');
  };
  