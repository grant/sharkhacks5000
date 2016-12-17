import express from 'express';

const api = express();
api.get('/', function(req, res) {
  res.send('Welcome to our API!');
});

export default api;