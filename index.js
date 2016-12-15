var express = require('express');
var router = express.Router();
var subdomain = require('express-subdomain');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/app/src/client/static'));

// API
app.use(subdomain('api', router));
router.get('/', function(req, res) {
  res.send('Welcome to our API!');
});

// views is directory for all template files
app.set('views', __dirname + '/pages');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index.jade');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});