const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './src/pages');

app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(`${__dirname}/public`)))

app.get('/', (req, res) => res.send('Home Route'));

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.DB_Host, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(()=> {
    app.listen(port, () => console.log(`Server and DB running`))
  })
  .catch((err) => {
    console.log(err);
  });