
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.integer('type_id').references('user_types.id').notNullable();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('address1');
    table.string('address2');
    table.string('city');
    table.string('state');
    table.integer('zip');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
