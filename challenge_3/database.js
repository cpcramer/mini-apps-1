const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Cramer',
    database : 'practice'
  });

connection.connect(function(err) {
    if (err){
        throw err;
    } else {
        console.log("Connected!");
    }

    let myQuery = `CREATE TABLE IF NOT EXISTS practice
        (username VARCHAR(50) NOT NULL,
        age INT);`;

    connection.query(myQuery, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log("Table created");
        }
    });
});


  


module.exports = connection;