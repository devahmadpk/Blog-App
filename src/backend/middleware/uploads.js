
const multer = require('multer');
const path = require('path');


// Multer setup for user profile images in fileuploads folder
const profileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../fileuploads'));
    }, 
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${fileExtension}`);
    }
});

const profileUpload = multer({ storage: profileStorage });

// Multer setup for blog images in blogimages folder
const blogImageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../blogimages'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${fileExtension}`);
    }
});

const blogImageUpload = multer({ storage: blogImageStorage });

module.exports = {
    profileUpload,
    blogImageUpload,
  };