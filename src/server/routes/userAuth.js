var knex = require('../../../db/knex');

module.exports = function userAuth (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  knex('users').select('*').where('email', email)
    .then(function(user) {
      if (user[0].password === password) {
        console.log('the passwords match!');
        res.cookie('id', user[0].id, {httpOnly: true, signed: true});
        res.render('index');
      }
    });
};
