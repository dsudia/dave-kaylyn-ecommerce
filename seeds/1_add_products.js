
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('products').del(),

    // Inserts seed entries
    knex('table_name').insert({name: 'Petrol Shoe', color: 'blue', image_file: 'images/womens-petrol-shoe-blue.png', price: 49.99, gender: 'f'}),
    knex('table_name').insert({name: 'Petrol Boot', color: 'blue', image_file: 'images/womens-petrol-boot-blue.png', price: 69.99, gender: 'f'}),
    knex('table_name').insert({name: , image_file: , price: , gender: , size: }),
  );
};
