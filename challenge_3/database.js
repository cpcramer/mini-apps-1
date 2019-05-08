const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Sunnyd20knee',
    database : 'practice'
  });

  connection.connect(function(err) {
    if (err){
        throw err;
    } else {
        console.log("Connected!");
    }
    var sql = `CREATE TABLE IF NOT EXISTS practice
        (username VARCHAR(50) NOT NULL,
        age INT);`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

module.exports = connection;