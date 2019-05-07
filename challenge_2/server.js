const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'client')));

// you need to use bodyParser() if you want the form data to be available in req.body
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req, res) => {
    console.log(req.body);
    // res.myData = "";
    // res.myData = req.body;
    res.send(req.body);

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
