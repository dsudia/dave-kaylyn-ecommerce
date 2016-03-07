
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_types', function(table) {
    table.increments().notNullable();
    table.string('type').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_types');
};
