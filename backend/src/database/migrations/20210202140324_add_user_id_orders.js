exports.up = function (knex) {
  return knex.schema.table("orders", function (table) {
    table.string("user_id").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table("orders", function (table) {
    table.dropColumn("user_id");
  });
};
