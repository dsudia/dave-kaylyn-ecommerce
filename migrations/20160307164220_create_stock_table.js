
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stock', function(table) {
    table.increments();
    table.integer('product_id').references('products.id');
    table.integer('size_id').references('sizes.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stock');
};
