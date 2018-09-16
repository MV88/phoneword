const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config()

let app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use('/words', routes);
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
