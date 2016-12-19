/* eslint-disable import/no-extraneous-dependencies */

import del from 'del';
import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import flow from 'gulp-flowtype';
import util from 'gulp-util';
import mocha from 'gulp-mocha';
import webpack from 'webpack-stream';
var w = require('webpack');

const fileNames = {
  indexBundle: 'client-bundle.js'
};

const paths = {
  allSrcJs: 'app/src/**/*.js?(x)',
  serverSrcJs: 'app/src/server/**/*.js?(x)',
  sharedSrcJs: 'app/src/shared/**/*.js?(x)',
  allLibTests: 'lib/test/**/*.js',

  clientEntryPoint: 'app/src/client/cliententry.jsx',
  docsEntryPoint: 'app/src/client/docs.jsx',

  clientBundle: 'dist/client-bundle.js?(.map)',
  docsBundle: 'dist/docs.js?(.map)',

  gulpFile: 'gulpfile.babel.js',
  webpackFile: 'webpack.config.babel.js',
  libDir: 'lib',
  distDir: 'dist',
};

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ])
  //.pipe(eslint())
  //.pipe(eslint.format())
    .pipe(flow({abort: false}))
);

gulp.task('clean', () => del([
  paths.libDir,
  paths.clientBundle,
  paths.docsBundle,
]));

gulp.task('build', ['lint', 'clean'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
);

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

gulp.task('default', ['watch', 'main']);
