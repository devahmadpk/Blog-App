

const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./config/db');
const { profileUpload, blogImageUpload } = require('./middleware/uploads');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve images from the backend fileuploads folder
app.use('/uploads', express.static(path.join(__dirname, 'fileuploads')));
app.use('/blogimages', express.static(path.join(__dirname, 'blogimages')));

// Routes
app.use('/', require('./routes/blogRoutes'));
app.use('/', require('./routes/userRoutes'));
app.use('/', require('./routes/authRoutes'));


app.get('/interests', (req, res) => {
  const sql = `SELECT * FROM interests`;
  db.query(sql, (err, result) => {
    if(err) {
      return res.status(500).json({message: 'An error occurred while fetching interests'});
    }

    return res.status(200).json(result);
  })
})


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
