
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table) {
    table.increments().notNullable();
    table.string('name').unique().notNullable();
    table.string('image_file');
    table.decimal('price', 5, 2).notNullable();
    table.string('gender');
    table.decimal('size', 3, 1).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
