const express = require('express');
const db = require('../config/db');
const router = express.Router();

    //////////////////// End point for creating user in db  ////////////////////
    router.post('/signup', (req, res) => {
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
          const defaultProfileImage = '/uploads/default-user.png';
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



        //////////////////// End point for fetching inputted user  ////////////////////
        router.post('/signin', (req, res) => {
            const {email, password_hash} = req.body;
            const sql = 'SELECT * FROM users WHERE email = ? AND password_hash = ?';
            db.query(sql, [email, password_hash], (err, result) => {
              if(err) {
                res.status(500).json({message: 'An error occured while processing your request'});
              }
          
              // Check if any user was found
              if (result.length > 0) {
                const user = result[0];
          
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

          module.exports = router;