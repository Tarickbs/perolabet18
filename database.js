const { Pool } = require('pg');

// PostgreSQL connection setup
const pool = new Pool({
    user: 'your_username',  // replace with your database username
    host: 'localhost',  // replace with your database host
    database: 'your_database',  // replace with your database name
    password: 'your_password',  // replace with your database password
    port: 5432,  // replace with your database port if different from default
});

// Database initialization
const initDb = async () => {
    try {
        const queryText = `CREATE TABLE IF NOT EXISTS users (\n            id SERIAL PRIMARY KEY,\n            name VARCHAR(100) NOT NULL,\n            email VARCHAR(100) UNIQUE NOT NULL\n        );`;
        await pool.query(queryText);
        console.log('Database initialized successfully');
    } catch (err) {
        console.error('Error during database initialization:', err);
    } finally {
        pool.end();
    }
};

// Call the initialization function
initDb();
