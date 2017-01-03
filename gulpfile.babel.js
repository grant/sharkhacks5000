/* eslint-disable import/no-extraneous-dependencies */

import del from 'del';
import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import flow from 'gulp-flowtype';
import util from 'gulp-util';
import mocha from 'gulp-mocha';
var path = require('path');
import webpack from 'webpack-stream';
import WebpackDevServer from 'webpack-dev-server';
var w = require('webpack');

const fileNames = {
  indexBundle: 'index.js'
};

const paths = {
  allSrcJs: 'app/src/**/*.js?(x)',
  serverSrcJs: 'app/src/server/**/*.js?(x)',
  sharedSrcJs: 'app/src/shared/**/*.js?(x)',
  allLibTests: 'lib/test/**/*.js',

  clientEntryPoint: 'app/src/client/cliententry.jsx',
  docsEntryPoint: 'app/src/client/docs.jsx',

  dist: 'dist/**/*.js?(.map)',

  gulpFile: 'gulpfile.babel.js',
  webpackFile: 'webpack.config.babel.js',
  libDir: 'lib',
  distDir: 'dist',
};

const config = {
  watch: true,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    'app/src/client/cliententry.jsx'
  ],

  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'index.js',
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.css'],
    modulesDirectories: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  },

  plugins: [
    new w.HotModuleReplacementPlugin()
  ]
};

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
  ])
  //.pipe(eslint())
  //.pipe(eslint.format())
    .pipe(flow({
      abort: false,
    }))
);

gulp.task('clean', () => del([
  paths.libDir,
  paths.distDir,
]));

gulp.task('build', ['lint', 'clean'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
);

gulp.task('webpack-dev-server', (callback) => {
  var server = new WebpackDevServer(w(config), {
    publicPath: '/dist/',
    contentBase: 'dist',
    hot: true,
    inline: true,
    noInfo: true,
    quiet: true,
    stats: { colors: true }
  });

  server.listen(8080, "localhost", function() {});

  gutil.log('[webpack-dev-server]',
    'http://localhost:8080/webpack-dev-server/build/index.html');

  callback();
});
gulp.task('webpack', function (callback) {
  w(config, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      colors: true
    }));
  });
});


gulp.task('test', ['build'], () =>
  gulp.src(paths.allLibTests)
    .pipe(mocha())
);

gulp.task('main', ['test'], () => {
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack({
      output: {
        filename: fileNames.indexBundle,
      },
      devtool: 'source-map',
      module: {
        loaders: [{
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: [/node_modules/],
        }],
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
      },
    }))
    .pipe(gulp.dest(paths.distDir))
    .on('error', util.log);
  gulp.src(paths.docsEntryPoint)
    .pipe(webpack({
      output: {
        filename: 'docs.js',
      },
      devtool: 'source-map',
      module: {
        loaders: [{
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: [/node_modules/],
        }],
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
      },
    }))
    .pipe(gulp.dest(paths.distDir))
    .on('error', util.log);
});

gulp.task('prod', ['clean'], () => {
  // TODO(grant) make this build the docs entry point (refactor this)
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack({
      output: {
        filename: fileNames.indexBundle,
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
          },
        ],
      },
      plugins: [
        new w.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new w.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      ],
      resolve: {
        extensions: ['', '.js', '.jsx'],
      },
    }))
    .pipe(gulp.dest(paths.distDir))
    .on('error', util.log)
});

gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('dev', [
  'webpack-dev-server',
  'webpack'
]);
gulp.task('default', ['dev'])

// gulp.task('default', ['watch', 'main']);
