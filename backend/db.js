const mysql = require('mysql2');

const pool = mysql.createPool({

    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'parsucat',

});

pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
    connection.release();
});

module.exports = pool;