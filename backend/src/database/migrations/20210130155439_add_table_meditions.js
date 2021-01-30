
exports.up = function(knex) {
  return knex.schema.createTable("meditions", (table)=>{
    table.string("order_id").references('id').inTable('orders');
    table.string("data").notNullable();
    table.string("hour").notNullable();
    table.string("medition").notNullable();
    table.string("temperature").notNullable();
    table.string("bomb_state").notNullable();
    table.string("user_id").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("meditions");
};
