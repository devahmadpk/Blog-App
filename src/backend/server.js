

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const db = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'ahmad',
  password: 'newuserpass1234',
  database: 'blog_app',
  port: '3306'
})

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.post('/signin', (req, res) => {
  const {email, password_hash} = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password_hash = ?';
  db.query(sql, [email, password_hash], (err, result) => {
    if(err) {
      res.status(500).json({message: 'An error occured while processing your request'});
    }
    else {
      if(result.length > 0) {
        res.status(200).json({message: 'Login successful'});
      }
      else {
        res.status(401).json({message: 'Invalid username or password'});
      }
    }
  });
});

app.post('/signup', (req, res) => {
  const { username, email, password_hash } = req.body;

  // Step 1: Check if user already exists
  const checkUserSql = 'SELECT * FROM users WHERE email = ?';
  db.query(checkUserSql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'An error occurred while processing your request' });
    }

    // If user already exists, send an error response
    if (result.length > 0) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Step 2: Insert new user into database
    const insertUserSql = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';
    db.query(insertUserSql, [username, email, password_hash], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to register user' });
      }

      // Successfully inserted user
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
