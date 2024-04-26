require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const { login, signup } = require('./model/authentication');
const { validateEmail, validatePassword, validateUser } = require('./middleware/auth');
const { bookServices } = require('./endpoints/bookServices');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// authentication & authrization
app.post('/login', login);
app.post('/signup', validateEmail, validatePassword, signup);

// CRUD operation with middleware
app.get('/', validateUser, bookServices.getAllBooks);
app.get('/:id', validateUser, bookServices.getBookById);
app.post('/', validateUser, bookServices.createBook);
app.put('/:id', validateUser, bookServices.updateBook);
app.delete('/:id', validateUser, bookServices.deleteBook);


// filter value
app.get('/books/filter', validateUser, bookServices.filterBooks);


app.listen(port, console.log(`Server Listening on: http://localhost:${port}`));