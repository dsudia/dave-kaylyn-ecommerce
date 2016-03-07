
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('products').del(),

    // Inserts seed entries
    knex('table_name').insert({name: 'Petrol Shoe', color: 'blue', image_file: 'images/womens-petrol-shoe-blue.png', price: 49.99, gender: 'f'}),
    knex('table_name').insert({name: 'Petrol Boot', color: 'blue', image_file: 'images/womens-petrol-boot-blue.png', price: 69.99, gender: 'f'}),
    knex('table_name').insert({name: 'Rouge Slipper', color: 'red', image_file: 'images/womens-slipper-red.png', price: 39.99, gender: 'f'}),
    knex('table_name').insert({name: 'Rouge Boot', color: 'red', image_file: 'images/womens-boot-red.png', price: 69.99, gender: 'f'}),
    knex('table_name').insert({name: 'Coal Boot', color: 'black', image_file: 'images/womens-boot-black.png', price: 69.99, gender: 'f'}),
  );
};
