// libraries 
const express = require('express');
const app = express();
const port = 3000;
const database = require('./database.js');
// import database




// middleware
    // bodyparser 


// routes
app.get('/', (req, res) => res.send('Hello get'));

app.post('/', (req, res) => res.send('Hello post'));



// listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))