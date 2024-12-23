

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

// Db connection
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

// Serve images from the backend fileuploads folder
app.use('/uploads', express.static(path.join(__dirname, 'fileuploads')));

// User SignIn
app.post('/signin', (req, res) => {
  const {email, password_hash} = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password_hash = ?';
  db.query(sql, [email, password_hash], (err, result) => {
    if(err) {
      res.status(500).json({message: 'An error occured while processing your request'});
    }

    // Check if any user was found
    if (result.length > 0) {
      const user = result[0];
      // Log user data before sending it to the client
      console.log('Found user:', user);

      // Respond with user data
      return res.status(200).json({
        message: 'Login successful',
        userId: user.user_id,
        username: user.username,
        profileImage: user.profile_pic,
      });
    }
      else {
        res.status(401).json({message: 'Invalid username or password'});
      }
  
  });
});

// User Sign Up
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
    const defaultProfileImage = './fileuploads/default-user.png';
    const insertUserSql = 'INSERT INTO users (username, email, password_hash, profile_pic) VALUES (?, ?, ?, ?)';
    db.query(insertUserSql, [username, email, password_hash, defaultProfileImage], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to register user' });
      }

      // Successfully inserted user
      res.status(201).json({ message: 'User registered successfully', userId: result.insertId, profileImage: defaultImage, });
    });
  });
});

// Fetch user profile image
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'SELECT username, profile_pic FROM users WHERE user_id = ?';

  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'An error occurred while fetching user data' });
    }

    if (result.length > 0) {
      return res.status(200).json(result[0]); // Return user data including profile_image
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  });
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
