
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('stock').del(),

    // Inserts seed entries
    knex('stock').insert({product_id: knex.select(id).from('products').where('name', 'Petrol Shoe'), size_id: knex.select(id).from('sizes').where('size', 8)}),
    knex('stock').insert({product_id: knex.select(id).from('products').where('name', 'Petrol Shoe'), size_id: knex.select(id).from('sizes').where('size', 6)})
  );
};
