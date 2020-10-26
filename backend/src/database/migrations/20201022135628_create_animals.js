exports.up = function(knex) {
    return knex.schema.createTable('animals',function(table){
        table.increments();
        table.string('nome').notNullable();
        table.integer('idade').notNullable();
        table.string('chipado').notNullable();
        table.string('personalidade').notNullable();
        table.string('senha').notNullable();

        table.integer('id_ong').notNullable();
        table.integer('id_categoria').notNullable();
        table.integer('id_raca').notNullable();
        
        
        table.foreign('id_ong').references('id').inTable('ongs');
        table.foreign('id_categoria').references('id').inTable('categorias');
        table.foreign('id_raca').references('id').inTable('racas');
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTable('animals');
  };