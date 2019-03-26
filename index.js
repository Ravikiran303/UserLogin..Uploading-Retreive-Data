const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
const mongoURI = 'mongodb://localhost:27017/mernloginreg';

mongoose
    .connect(mongoURI,{useNewUrlParser:true})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

var Users = require('./routes/Users');
app.use('/users',Users);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));