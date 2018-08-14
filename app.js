var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//connect to MongoDB
mongoose.connect('mongodb://.....................', { useNewUrlParser: true });
var db = mongoose.connection;
mongoose.Promise = global.Promise;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connected to Mongo");
});

//include jquery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from template
app.use(express.static(__dirname + '/public'));

// include routes
app.use('/', [require('./routes/keezerRouter')]);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


app.listen(process.env.PORT || 3000, function(){
  console.log('Express app listening on port 3000');
});
