// express
// library installation / Use libraries 
const express = require('express');
const app = express();
const port = 3000;
const database = require('./database.js');

// middleware
app.use(express.static('public'))

// routes

app.get('/test', (req, res) => {
    database.query("SELECT * FROM practice;", (err, data) => {
        if(err){
            console.log('error in database query:', err);
            res.end('There was an error');
        } else {
            console.log('data:', data);
            res.send(data);
        }
    })
});

app.post('/test', (req, res) => {
    database.query("INSERT INTO practice (username, age) VALUES ('chad', 23);", (err, data) => {
        if(err){
            console.log("ERROR", err);
            res.end('There was an error');
        } else {
            console.log('data:', data);
            res.send(data);
        }
    })   
});

// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

