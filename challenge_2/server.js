const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'client')));

// you need to use bodyParser() if you want the form data to be available in req.body
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req, res) => {
    //To specify what origins have access to the resource, you need to add the Access-Control-Allow-Origin header to your response. It will be interpreted by the browser of the visitor of your site.
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    console.log(req.body);
    res.send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
