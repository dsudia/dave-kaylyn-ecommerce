var knex = require('./db/knex');
function Shoes() {
  return knex('products')
}


module.exports = {
  getShoes: function() {
    return Shoes()
  }

};
