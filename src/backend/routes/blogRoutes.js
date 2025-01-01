
const express = require('express');
const db = require('../config/db');
const {blogImageUpload} = require('../middleware/uploads');
const router = express.Router();

//////////////////// End point for creating a blog ////////////////////
router.post('/create-blog', blogImageUpload.single('blogImage'), (req, res) => {
  const { userId, title, content } = req.body;

  if (!userId || !title || !content) {
    return res.status(400).json({ message: 'User ID, title, and content are required' });
  }

  try {
    let imagePath = null;

    if (req.file) {
      imagePath = `/${req.file.filename}`;
    }

    const sql = `
      INSERT INTO blogs (user_id, title, content, image_url)
      VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [userId, title, content, imagePath], (err, result) => {

      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Error saving blog in the database' });
      }

      res.status(201).json({
        message: 'Blog created successfully',
        blogId: result.insertId,
      });
    });
  } catch (error) {
    console.error('Error processing blog creation:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



//////////////////// End point for fetching all blogs ////////////////////
router.get('/all-blogs', (req, res) => {
    const blogId = req.params.blogId;
    const sql = 'SELECT * FROM blogs order by created_at desc';
  
    db.query(sql, [blogId], (err, result) => {
      if (err) {  
        return res.status(500).json({ message: 'An error occurred while fetching blog data' });
      }
  
      if (result.length > 0) {
        return res.status(200).json(result); // Return user data including profile_image
      } else {
        return res.status(404).json({ message: 'Blog not found' });
      }
    });
  });



  //////////////////// Endpoint for fetching blogs created by user ////////////////////
  router.get('/blogs/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = 'SELECT * FROM blogs WHERE user_id = ?';
  
    db.query(sql, [userId], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'An error occurred while fetching user data' });
      }
  
      if (result.length > 0) {
        return res.status(200).json(result); // Return user data including profile_image
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    });
  });



  //////////////////// Endpoint for fetching  blog selected through card ////////////////////
  router.get('/selected-blogs/:blogId', (req, res) => {
    const blogId = req.params.blogId;
    const sql = 'SELECT title, image_url, content, created_at FROM blogs WHERE blog_id = ?';
  
    db.query(sql, [blogId], (err, result) => {
      if (err) {  
        return res.status(500).json({ message: 'An error occurred while fetching blog data' });
      }
  
      if (result.length > 0) {
        return res.status(200).json(result); // Return user data including profile_image
      } else {
        return res.status(404).json({ message: 'Blog not found' });
      }
    });
  });



  //////////////////// Endpoint for creating a like on blog ////////////////////
  router.post('/liked-blogs', (req, res) => {

    const {userId, blogId} = req.body;
  
    const sql = 'INSERT INTO likes (user_id_l, blog_id_l) VALUES (?, ?)';
    db.query(sql, [userId, blogId], (err, result) => {
  
      if(err) {
        return res.status(500).json({message: 'An error occurred while processing your request'});
      }
  
      return res.status(201).json(result);
    })
  });



    //////////////////// Endpoint for creating a comment on a blog ////////////////////
    router.post('/comments', (req, res) => {
        const {userId, blogId, comment} = req.body;
        const sql = 'INSERT INTO comments (user_id_c, blog_id_c, comment_text) VALUES (?, ?, ?)';
        db.query(sql, [userId, blogId, comment], (err, result) => {
          if(err) {
            return res.status(500).json({message: 'An error occurred while processing your request'});
          }
      
          return res.status(201).json({message: 'Comment posted successfully'});
        });
      });
    


    //////////////////// End point for fetching user comments on a blog ////////////////////
router.get('/comments/:blogId', (req, res) => {
  const blogId = req.params.blogId;
  const sql = `
  SELECT comments.comment_id, comments.comment_text, comments.created_at AS comment_date, users.username, users.profile_pic,blogs.created_at
  FROM 
    comments
  JOIN 
    users ON comments.user_id_c = users.user_id
  JOIN 
    blogs ON comments.blog_id_c = blogs.blog_id
  WHERE 
    comments.blog_id_c = ?;
`;  db.query(sql, [blogId], (err, result) => {
    if(err) {
      return res.status(500).json({message: 'An error occurred while processing your request'});
    }

    if (result.length > 0) {
      return res.status(200).json(result); // Return user data including profile_image
    } else {
      return res.status(404).json({ message: 'User not found' });
    }

    // return res.status(200).json(result);
  });
});



    //////////////////// Endpoint for fetching saved blogs ////////////////////
    router.get('/saved-blogs/:id', (req, res) => {
        const userId = req.params.id;
        
        const sql = `SELECT blogs.title, blogs.image_url, saved_blogs.saved_at FROM saved_blogs INNER JOIN blogs ON 
            saved_blogs.blog_id_sd = blogs.blog_id  WHERE saved_blogs.user_id_sd = ? `;
        db.query(sql, [userId], (err, result) => {
      
          if(err) {
            return res.status(500).json({message: 'An error occurred while processing your request'});
          }
      
          return res.status(201).json(result);
        });
      });



    //////////////////// Endpoint for saving blogs for users ////////////////////
    router.post('/saved-blogs', (req, res) => {
        const {userId, blogId} = req.body;
      
        const sql = 'INSERT INTO saved_blogs (user_id_sd, blog_id_sd) VALUES (?, ?)';
        db.query(sql, [userId, blogId], (err, result) => {
      
          if(err) {
            return res.status(500).json({message: 'An error occurred while processing your request'});
          }
      
          if(result>0) {
            return res.status(201).json(result);
          }
        });
    });

module.exports = router;