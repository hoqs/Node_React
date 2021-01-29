exports.up = function (knex) {
  return knex.schema.table("usuarios", function (table) {
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table("usuarios", function (table) {
    table.dropColumn("password");
  });
};
