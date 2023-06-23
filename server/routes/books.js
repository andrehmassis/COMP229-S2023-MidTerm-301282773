/* 
Student Name: Andre Henrique Moyses de Assis
Student number: 301282773
Curse Name: Web Application Development
Curse Code:COMP229
Assignment: Mid-Term Test
File: books.js
Date: 2023-06-23
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');
const books = require('../models/books');
const { title } = require('process');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('books/index', {
        title: 'Books List',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    res.render('books/details', {
      title: 'Add New Book',
      books: ''
    });

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let newBook = new book({
      Title: req.body.title,
      Description: req.body.description,
      Price: req.body.price,
      Author: req.body.author,
      Genre: req.body.genre
    });

    book.create(newBook, (err, createBook) => {
      if (err) {
        console.log(err);
        res.send(err);
      }else{
        res.redirect('/books');
      }
    })

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let id = req.params.id;

    book.findById(id, (err, bookEdit) => {
      if (err) {
        return console.log(err);

      } else {
          res.render('books/details', {
          title: 'Edit Book Informations',
          books: bookEdit
        });
      }
    });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let id = req.params.id;

    let updatedBook = {
      Title: req.body.title,
      Description: req.body.description,
      Price: req.body.price,
      Author: req.body.author,
      Genre: req.body.genre
    };

    book.updateOne({_id: id}, updatedBook, (err, createBook) =>{
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }else{
        res.redirect('/books');
      }
    });
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let id = req.params.id;
    book.remove({ _id: id }, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      }
      else {
        res.redirect('/books');
      }
  
    });

});


module.exports = router;
