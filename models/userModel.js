// userModel.js
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'your-db-host',
  user: 'your-db-username',
  password: 'your-db-password',
  database: 'your-db-name',
});

module.exports = db;
