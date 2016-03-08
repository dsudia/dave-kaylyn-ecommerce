var knex = require('../../../db/knex');

module.exports = function userAuth (req, res, next) {
  var username = req.query.username;
  var password = req.query.password;
  knex('users').select('*').where('username', username)
    .then(function(user) {
      if (user.password === password) {
        res.cookie('id', user.id, {httpOnly: true, secure: true, signed: true})
        .redirect('/');
      }
    });
};
