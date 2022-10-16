const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const contactRoute = require('./routes/contact');
const messageRoute = require('./routes/message');




app.use(bodyParser.json());
app.use(cors());
app.use('/contact', contactRoute);
app.use('/message', messageRoute);




module.exports = app;