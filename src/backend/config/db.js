

const mysql = require('mysql2');

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'ahmad',
    password: 'newuserpass1234',
    database: 'blog_app',
    port: '3306'
});

module.exports = db;