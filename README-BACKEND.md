# Backend Setup Instructions

## Prerequisites
- Ensure you have [Node.js](https://nodejs.org/en/) installed.
- Install [MongoDB](https://www.mongodb.com/try/download/community) for database management.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Tarickbs/perolabet18.git
   cd perolabet18
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the project and add the necessary environment variables as documented in `.env.example`.

## Running the Server
- To start the server, run:
  ```bash
  npm start
  ```
- The server will be running on `http://localhost:3000`.

# API Documentation
## Endpoints
- `GET /api/v1/users` - Retrieve a list of users.
- `POST /api/v1/users` - Create a new user.
- `GET /api/v1/users/:id` - Retrieve user details by ID.

## Example Request
```bash
curl -X POST http://localhost:3000/api/v1/users -H 'Content-Type: application/json' -d '{"name":"John Doe","email":"john@example.com"}'
```

# Architecture Overview
- The architecture follows the MVC design pattern.
- **Model**: Represents the data layer and interacts with the database.
- **View**: Not applicable in a backend service but represents response formats.
- **Controller**: Contains the logic for processing requests and returning responses.