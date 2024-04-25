require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const {login, signup} = require('./model/authentication');
const {validateEmail, validatePassword, validateUser} = require('./middleware/auth');

const bookService = require('./services/bookService');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// authentication & authrization
app.post('/login', login);
app.signup('/signup', validateEmail, validatePassword, signup);

// CRUD operation with middleware
app.get('/', async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(port, console.log(`Server Listening on: http://localhost:${port}`));