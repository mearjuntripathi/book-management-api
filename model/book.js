// models/book.js
const mongoose = require('./db');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      publicationYear: {
        type: Number,
        required: true
      }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
