# corserva-app-be


# Orders API Backend

This is a backend application for managing orders using a RESTful API. The application is built with Node.js, Express, Sequelize (ORM for PostgreSQL), and TypeScript. The project includes unit and integration tests using Jest and Supertest, and is containerized using Docker.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)
- [Environment Variables](#environment-variables)
- [Docker](#docker)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/miguelcamargo9/corserva-app-be.git
   cd corserva-app-be
   ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the root directory and add your environment variables (see Environment Variables).

4. Run database migrations:
    ```sh
    npx sequelize-cli db:migrate
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. The API will be available at http://localhost:3001.

## API Endpoints

### Get all orders
* URL: /sale-order-items
* Method: GET
* Description: Retrieves all sale order items.
* Response:
  * 200 OK on success
  * JSON array of order items

### Get order by ID
* URL: /sale-order-items/:id
* Method: GET
* Description: Retrieves a sale order item by its ID.
* Response:
  * 200 OK on success
  * JSON object of the order item

### Create order
* URL: /sale-order-items
* Method: POST
* Description: Creates a new sale order item.
* Request Body:
  ```json
  {
    "name": "Test Item",
    "quantity": 10,
    "price": 100.0
  }
  ```
* Response:
  * 201 Created on success
  * JSON object of the created order item

### Update order
* URL: /sale-order-items/:id
* Method: PUT
* Description: Updates an existing sale order item by its ID.
* Request Body:
  ```json
  {
    "name": "Updated Item",
    "quantity": 5,
    "price": 50.0
  }
  ```
* Response:
  * 200 OK on success
  * JSON object of the updated order item

### Delete order
* URL: /sale-order-items/:id
* Method: DELETE
* Description: Deletes a sale order item by its ID.
* Response:
  * 204 No Content on success

## Running Tests

1. Run the tests using Jest:
    ```sh
    npm run test
    ```

## Environment Variables
Create a `.env` file in the root directory with the following variables:
  ```env
  NODE_ENV=development
  PORT=3000
  DATABASE_URL=postgres://user:password@localhost:5433/corserva
  DATABASE_URL_TEST=postgres://user:password@localhost:5434/corserva_test
  ```

## Docker
### Build and run the Docker containers:

1. Build and start the containers:
    ```sh
    docker-compose up --build
    ```
2. The API will be available at http://localhost:3001.

## Running Migrations inside Docker container:
1. Access the app container:
    ```sh
    docker-compose exec app bash
    ```
2. Run the migrations:
    ```sh
    npx sequelize-cli db:migrate
    ```