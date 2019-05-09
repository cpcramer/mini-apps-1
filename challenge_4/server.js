// libraries 
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
// import database
const database = require('./database.js');

// middleware
    // bodyparser 
    app.use(bodyParser.json());

// routes
app.get('/', (req, res) => {
    let myQuery = `INSERT INTO Winner (name, color, wins) VALUES ("chad", "blue", 1);`;
    database.query(myQuery, function (error, results) {
        if (error){
            console.log('error in server get', error);
            res.end();
        } else {
            console.log('Successful query');
            res.send()
        }
      });
});

app.post('/', (req, res) => res.send('Hello post'));



// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))