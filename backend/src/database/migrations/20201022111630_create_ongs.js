
exports.up = function(knex) {
    return knex.schema.createTable('ongs',function(table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('senha').notNullable();
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTable('ongs');
  };
  