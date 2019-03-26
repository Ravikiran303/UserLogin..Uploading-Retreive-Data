const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send("Hello world");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));