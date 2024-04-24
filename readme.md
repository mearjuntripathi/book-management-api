# Book Management API

This is a simple RESTful API built with Node.js and Express.js for managing book entries. It provides functionalities for user authentication, CRUD operations for managing book entries, filtering books by author or publication year, and basic security measures.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Endpoints](#endpoints)
4. [Authentication](#authentication)
5. [Security](#security)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

1. Clone the repository:

```
git clone https://github.com/mearjuntripathi/book-management-api.git
```

2. Install dependencies:

```
cd book-management-api
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/book_management
JWT_SECRET=your_secret_key
```

## Usage

Start the server:

```
npm start
```

The API server will be running at `http://localhost:3000`.

## Endpoints

The API exposes the following endpoints:

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login user and generate JWT token.
- `GET /api/books`: Get all books.
- `GET /api/books/:id`: Get a book by ID.
- `POST /api/books`: Create a new book entry.
- `PUT /api/books/:id`: Update a book by ID.
- `DELETE /api/books/:id`: Delete a book by ID.
- `GET /api/books/filter?author=authorName`: Filter books by author.
- `GET /api/books/filter?year=publicationYear`: Filter books by publication year.

## Authentication

The API uses JWT (JSON Web Tokens) for user authentication. To access protected routes, include the JWT token in the `Authorization` header of the request:

```
Authorization: Bearer <JWT_TOKEN>
```

## Security

- Input validation is implemented using `express-validator` to prevent common security vulnerabilities like SQL injection and XSS attacks.
- Environment variables are used to store sensitive information like database URI and JWT secret key.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.