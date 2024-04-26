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