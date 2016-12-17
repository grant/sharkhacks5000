import api from './api';
import docs from './docs';
import express from 'express';

/**
 * The entry point to the server.
 * @param settings[dirname] The root directory's `__dirname`.
 */
module.exports = (settings) => {
  const app = express();
  app.set('port', (process.env.PORT || 5000));

  app.use(express.static(settings.dirname + '/dist'));
  app.use(express.static(settings.dirname + '/app/src/client/static'));

  // API
  app.use('/api', api);

  // Docs
  app.use('/docs', docs);

  // Views
  // views is directory for all template files
  app.set('views', settings.dirname + '/pages');
  app.set('view engine', 'jade');
  app.get('/', function(req, res) {
    res.render('index.jade');
  });

  // App Server
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
}