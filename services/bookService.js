// services/bookService.js
const Book = require('../model/book');

const bookService = {
  getAllBooks: async () => {
    return await Book.find();
  },
  getBookById: async (id) => {
    return await Book.findById(id);
  },
  createBook: async (bookData) => {
    return await Book.create(bookData);
  },
  updateBook: async (id, bookData) => {
    return await Book.findByIdAndUpdate(id, bookData, { new: true });
  },
  deleteBook: async (id) => {
    return await Book.findByIdAndDelete(id);
  },
  filterBooksByAuthorAndYear: async (author, year) => {
    return await Book.find({author: author, publicationYear: year});
  },
  filterBooksByAuthor: async (author) => {
    return await Book.find({ author: author });
  },
  filterBooksByYear: async (year) => {
    return await Book.find({ publicationYear: (year) });
  }
};

module.exports = bookService;