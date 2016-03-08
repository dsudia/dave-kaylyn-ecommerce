var express = require('express');
var router = express.Router();
var pg = require('pg');
// var knex = require('knex');
var queries = require("../../../queries");
var knex = require('../../../db/knex');

router.get('/', function(req, res, next) {
    var shoes;
    queries.getShoes()
    .then(function(result){
      shoes = result;
      console.log(shoes);
      res.render("index", {shoes: shoes, title: 'Shoes'});
  })
  .catch(function(err){
    console.log(err)
  })
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Check Out' });
});

router.get('/products', function(req, res, next) {
  var shoes;
  queries.getShoes()
  .then(function(result){
    shoes = result;
    console.log(shoes);
    res.render("products", {shoes: shoes, title: 'Shoes'});
  })
  .catch(function(err){
    console.log(err)
  })
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});


module.exports = router;
