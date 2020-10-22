
exports.up = function(knex) {
    return knex.schema.createTable('racas',function(table){
        table.increments();
        table.string('nome').notNullable();

        table.integer('id_categoria').notNullable();
        
        table.foreign('id_categoria').references('id').inTable('categorias');
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTable('racas');
  };
  