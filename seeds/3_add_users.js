
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({email: 'dsudia@gmail.com', password: 'abc123', type_id: knex.select(id).from('user_types').where('type', 'admin'), firstname: 'Dave', lastname: 'Sudia'}),
    knex('users').insert({email: 'vann5674@gmail.com', password: 'abc123', type_id: knex.select(id).from('user_types').where('type', 'customer'), firstname: 'Kaylyn', lastname: 'Van Norstrand', address1: '123 Sesame St.', address2: 'Apt 2A', city: 'New York', state: 'NY', zip: 14617})
  );
};
