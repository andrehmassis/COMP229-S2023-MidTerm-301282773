/* 
Student Name: Andre Henrique Moyses de Assis
Student number: 301282773
Curse Name: Web Application Development
Curse Code:COMP229
Assignment: Mid-Term Test
File: index.js
Date: 2023-06-23
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
