require('dotenv').config();

const express = require('express');

const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

const bookService = require('./services/bookService');
// app.use(express.static(path.join(__dirname, '')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/', (req,res)=>{})

app.listen(port, console.log(`Server Listening on: http://localhost:${port}`));