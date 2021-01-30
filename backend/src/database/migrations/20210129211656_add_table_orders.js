
exports.up = function(knex) {
    return knex.schema.createTable("orders", function (table) {
        table.string("id").primary();
        table.string("data").notNullable();
        table.string("costumer").notNullable();
        table.integer("first_medition").notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("orders");
};
