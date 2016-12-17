import express from 'express';

const api = express.Router();
api.get('/', (req, res) => {
  res.send('Welcome to our API!');
});

export default api;