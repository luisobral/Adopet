
exports.up = function(knex) {
    return knex.schema.createTable('categorias',function(table){
        table.increments();
        table.string('nome').notNullable();
        
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTable('categorias');
  };
  