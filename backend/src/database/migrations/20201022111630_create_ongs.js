
exports.up = function(knex) {
    return knex.schema.createTable('ongs',function(table){
        table.string('id').primary();
        table.string('email').notNullable();
        table.string('whatsApp').notNullable();
        table.string('city').notNullable();        
        table.string('uf').notNullable();        
        table.string('nome_ong').notNullable();
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTable('ongs');
  };
  