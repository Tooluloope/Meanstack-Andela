const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

const app = express();


const api = require('./server/routes/api');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

// catch 404 and forward to error handler
app.get('*',function(req, res) {
  res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(port,function () {
  console.log('server running on localHost' + port)
});
