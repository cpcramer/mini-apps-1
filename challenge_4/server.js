// libraries 
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
// import database
const database = require('./database.js');

// middleware
    // handle CORS request
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    // bodyparser 
    app.use(bodyParser.json()); // <--- Here
    


// routes
app.post('/test', (req, res) => {
    console.log(req.body);
    const myQuery = `INSERT INTO Winner (name, color, wins) VALUES ("${req.body.name}", "${req.body.color}", ${req.body.age});`;
    database.query(myQuery, (error, results) => {
        if (error){
            console.log('error in server get', error);
            res.end();
        } else {
            console.log('Successful query');
            res.send()
        }
      });
});

// app.post('/', (req, res) => res.send('Hello post'));



// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))