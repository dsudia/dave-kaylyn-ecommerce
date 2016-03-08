
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('sizes').del(),

    // Inserts seed entries
    knex('sizes').insert({size: 5}),
    knex('sizes').insert({size: 5.5}),
    knex('sizes').insert({size: 6}),
    knex('sizes').insert({size: 6.5}),
    knex('sizes').insert({size: 7}),
    knex('sizes').insert({size: 7.5}),
    knex('sizes').insert({size: 8}),
    knex('sizes').insert({size: 8.5}),
    knex('sizes').insert({size: 9}),
    knex('sizes').insert({size: 9.5}),
    knex('sizes').insert({size: 10}),
    knex('sizes').insert({size: 10.5}),
    knex('sizes').insert({size: 11})
  );
};
