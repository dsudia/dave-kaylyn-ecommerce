
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('orders').del(),

    // Inserts seed entries
    knex('orders').insert({user_id: knex.select('id').from('users').where('firstname', 'Kaylyn'), products: '{name: "Petrol Shoe", color: "blue", price: "49.99", size: 7}', total: 49.99})
  );
};
