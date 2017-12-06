const express = require('express');
const mongoose = require('mongoose');
require('./model/Story');
require('./model/TestObject');

mongoose.connect('mongodb://admin:admin@ds129906.mlab.com:29906/vo-dev', {useMongoClient: true});
mongoose.Promise = global.Promise;
const app = express();

require('./dbRoutes')(app);

app.get('/', (req,res) => {
  res.send('saved');
});


app.listen(5000, () => {
  console.log('listening on port 5000');
});