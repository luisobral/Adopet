
exports.up = function(knex) {
  return knex.schema.createTable('User',function(table){
    table.string('id_User').primary();
    table.string('email_User').notNullable();
    table.string('whatsApp_User').notNullable();
    table.string('city_User').notNullable();        
    table.string('uf_User').notNullable();        
    table.string('nome_User').notNullable();
    })
};

exports.down = function(knex) {

    return knex.schema.dropTable('User');
  
};
