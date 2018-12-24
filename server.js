const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const api = require('./api');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

app.listen(process.env.PORT || 4000);