
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('user_types').del(),

    // Inserts seed entries
    knex('user_types').insert({type: 'admin'}),
    knex('user_types').insert({type: 'customer'})
  );
};
