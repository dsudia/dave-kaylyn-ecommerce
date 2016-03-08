
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table) {
    table.increments().notNullable();
    table.string('name').unique().notNullable();
    table.string('color').notNullable();
    table.string('image_file');
    table.decimal('price', 5, 2).notNullable();
    table.string('gender');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
