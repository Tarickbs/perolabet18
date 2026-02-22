const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user - replace this with your user database
const users = [];
const JWT_SECRET = 'your_jwt_secret';

// Register route
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Save user to the database (mock)
    users.push({ username, password });
    res.status(201).json({ message: 'User registered successfully!' });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials!' });
    }
});

// Token validation route
router.get('/validate', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        res.json({ valid: true, username: decoded.username });
    });
});

module.exports = router;