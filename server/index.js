var express = require('express');
var db = require('../database-mysql');

var app = express();

app.get('/scores', function (req, res) {
  console.log('got through');
  db.selectAll(function(err, data) {
    if(err) {
      console.log('notworking')
    } else {
      console.log(data)
      res.json(data);
    }
  });
});

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

