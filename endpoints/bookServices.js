const bookService = require('../services/bookService')

const bookServices = {
    getAllBooks: async (req, res) => {
        try {
            const books = await bookService.getAllBooks();
            res.json(books);
        } catch (error) {
            console.error('Error getting Books: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getBookById: async (req, res) => {
        try {
            let id = req.params.id;
            const book = await bookService.getBookById(id);
            res.json(book);
        } catch (error) {
            console.error('Error getting Books: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    createBook: async (req, res) => {
        try {
            const { title, author, publicationYear } = req.body;
            if (!title || !author || !publicationYear) {
                return res.status(400).json({ error: 'Missing required fields' });
            }
            const newBook = await bookService.createBook(req.body);
            res.status(201).json(newBook);
        } catch (error) {
            console.error('Error creating Book: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    updateBook: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedBook = await bookService.updateBook(id, req.body);
            if (!updatedBook) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.json(updatedBook);
        } catch (error) {
            console.error('Error updating Book: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    deleteBook: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(id);
            const deletedBook = await bookService.deleteBook(id);
            if (!deletedBook) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.json({ message: 'Book deleted successfully' });
        } catch (error) {
            console.error('Error deleting Book: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    filterBooks: async (req, res) => {
        try {
            const { author, year } = req.query;
            let filteredBooks = [];
            if (author && year) {
                // Filter by both author and year
                filteredBooks = await bookService.filterBooksByAuthorAndYear(author, year);
            } else if (author) {
                // Filter by author only
                filteredBooks = await bookService.filterBooksByAuthor(author);
            } else if (year) {
                // Filter by year only
                filteredBooks = await bookService.filterBooksByYear(year);
            } else {
                // No filter applied
                return res.status(400).json({ message: 'Please provide either author or year query paramseter' });
            }
            res.json(filteredBooks);
        } catch (error) {
            console.error('Error filtering Books: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = { bookServices };