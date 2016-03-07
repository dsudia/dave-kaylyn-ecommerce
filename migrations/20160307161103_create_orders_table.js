
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function(table) {
    table.increments().notNullable();
    table.integer('user_id').references('users.id').notNullable();
    table.json('products').notNullable();
    table.decimal('total', 6, 2).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
