
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sizes', function(table) {
    table.increments().notNullable();
    table.decimal('size', 3, 1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sizes');
};
