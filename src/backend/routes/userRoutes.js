const express = require('express');
const db = require('../config/db');
const {profileUpload} = require('../middleware/uploads');
const router = express.Router();

    //////////////////// End point for fetching username and profile Image  ////////////////////
    router.get('/user/:id', (req, res) => {
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



    //////////////////// End point for uploading profile Image ////////////////////
    router.post('/profileUpload', profileUpload.single('profileImage'), (req, res) => {
        try {
        const { userId } = req.body; 
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }
    
        if (!req.file) {
            return res.status(400).json({ message: 'File not uploaded' });
        }
    
        const filePath = `/${req.file.filename}`; 
        console.log('Uploaded file:', filePath);
    
        // Update the profile_pic column in the database
        const sql = 'UPDATE users SET profile_pic = ? WHERE user_id = ?';
        db.query(sql, [filePath, userId], (dbErr, result) => {
            if (dbErr) {
            return res.status(500).json({ message: 'Failed to update user profile' });
            }
    
            if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
            }
    
            res.status(200).json({ message: 'Profile updated successfully', filePath });
        });
        } catch (error) {
        console.error('Error processing upload:', error);
        res.status(500).json({ message: 'Internal server error' });
        }
    });

    module.exports = router;