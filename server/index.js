const express = require("express");
const app = express();
const cors = require('cors')
require('dotenv').config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const mongoURI = process.env.mongoURI
const mongoose = require("mongoose");
const connect = mongoose.connect(mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`)
});
