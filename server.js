var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  }
};

var app = express();
var compiler = webpack(config);

app.use(express.static('src/client/static/'));
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.set('port', (process.env.PORT || 3000));
app.set('views', 'pages');
app.set('view engine', 'jade');

// Routes
const docs = express.Router();
docs.get('/', (req, res) => {
  res.render('docs.jade');
});

app.get('/', function(req, res) {
  res.render('index.jade');
});
app.use('/docs', docs);

// App Server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});