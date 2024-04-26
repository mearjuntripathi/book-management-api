# Book Management API

The Book Management API is a Node.js-based RESTful API that provides functionalities for managing book entries. It offers user authentication, CRUD operations for book management, and filtering books by author or publication year.

## Features

- User authentication using login and signup endpoints.
- CRUD operations for managing book entries (Create, Read, Update, Delete).
- Filtering books by author or publication year.
- Implementation of basic security measures including input validation.

## Technologies Used

- **Node.js**: A JavaScript runtime environment that executes JavaScript code outside a web browser. Used as the backend runtime for the API.
  
- **Express.js**: A minimalist web framework for Node.js that provides a robust set of features for building web and mobile applications. Used for handling routing, middleware, and request/response processing.

- **bcryptjs**: A library for hashing passwords using bcrypt, a cryptographic hash function designed to securely hash passwords. Used for password hashing to enhance security.

- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`. Used for managing sensitive configuration data such as port numbers and database credentials.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/book-management-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd book-management-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and specify the environment variables:

    ```plaintext
    PORT=3000
    ```

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Use an API testing tool like Postman to interact with the API endpoints.

## API Endpoints

#### Authentication

- `POST /login`: User login.
- `POST /signup`: User signup.

#### Book Management

The API uses JWT (JSON Web Tokens) for user authentication. To access protected routes, include the JWT token in the Authorization header of the request:

```makefile
Authorization: Bearer <JWT_TOKEN>
```
##### Security
1. Input validation is implemented using express-validator to prevent common security vulnerabilities like SQL injection and XSS attacks.
2. Environment variables are used to store sensitive information like database URI and JWT secret key.

- `GET /`: Get all books.
- `GET /:id`: Get a book by ID.
- `POST /`: Create a new book.
- `PUT /:id`: Update an existing book.
- `DELETE /:id`: Delete a book by ID.

#### Filtering

- `GET /filter?author=:author`: Filter books by author.
- `GET /filter?year=:year`: Filter books by publication year.

## Environment Variables

- `PORT`: Port number for the server (default is 3000).


## Usage
Including instructions on how to use Postman to interact with the API endpoints:

### Authentication

- **POST /login**: Endpoint for user login. Requires `email` and `password` in the request body.
- **POST /signup**: Endpoint for user signup. Requires `email`, `password`, and `name` in the request body.

### Book Management

- **GET /**: Retrieve all books.
- **GET /:id**: Retrieve a book by its ID.
- **POST /**: Create a new book. Requires `title`, `author`, and `publicationYear` in the request body.
- **PUT /:id**: Update a book by its ID. Requires `title`, `author`, and `publicationYear` in the request body.
- **DELETE /:id**: Delete a book by its ID.

### Filtering Books

- **GET /api/books/filter**: Filter books by author and/or publication year. Supports query parameters `author` and `year`.

### File Sructure

```bash
book-management-api/
├── endpoints/
|   └── bookServices.js
├── middleware/
├── model/
|   ├── authentication.js
|   ├── book.js
|   ├── db.js
|   └── user.js
├── services/
|   ├── auth.js
|   └── bookService.js
├── .env
├── .gitignore
├── book-magement-api.postman_collection.json
├── package.json
├── readme.md
└── server.js
```

## Testing with Postman

1. Download and install [Postman](https://www.postman.com/downloads/).
2. Import the provided [Postman Collection](link_to_postman_collection_file).
3. Set up environment variables in Postman for `BASE_URL` and `TOKEN` (if authentication is enabled).
4. Start testing the API endpoints.

## Postman Collection

You can find the Postman Collection for this API in this repo [JSON FILe](./book-magement-api.postman_collection.json).