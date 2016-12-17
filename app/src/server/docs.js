import express from 'express';

const docs = express.Router();
docs.get('/', (req, res) => {
  res.render('docs.jade');
});

export default docs;