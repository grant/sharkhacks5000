/**
 * The entry point to the server.
 * @param settings
 */
module.exports = (settings) => {
  var express = require('express');
  var router = express.Router();
  var app = express();

  app.set('port', (process.env.PORT || 5000));

  app.use(express.static(settings.dirname + '/dist'));
  app.use(express.static(settings.dirname + '/app/src/client/static'));

// var api =
//
// // API
// app.use('/api', api)
// app.get('/api', function(req, res) {
//   res.send('Welcome to our API!');
// });

// views is directory for all template files
  app.set('views', settings.dirname + '/pages');
  app.set('view engine', 'jade');

  app.get('/', function(req, res) {
    res.render('index.jade');
  });

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
}