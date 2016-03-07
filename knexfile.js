module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/shoestore'
  },

  deployment: {
    client: 'pg',
    connection: 'postgres://'
  }
};
