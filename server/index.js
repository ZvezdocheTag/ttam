const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const apiRoutes = require('./apiRoutes');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);

app.listen(process.env.PORT || 4000);