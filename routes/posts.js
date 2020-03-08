const express = require('express');
const router = express.Router();

// GET posts index /posts
router.get('/', (req, res, next) => {
  res.send('INDEX /posts');
});

// GET posts new /posts/new - it must be before SHOW route
router.get('/new', (req, res, next) => {
  res.send('NEW /posts/new');
});

// POST posts create /posts
router.post('/', (req, res, next) => {
  res.send('CREATE /posts');
});

// GET posts show /posts/:id
router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/:id');
});

// GET posts edit /posts/:id/edit
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts');
});

// PUT posts update /posts/:id
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/new');
});

// DELETE posts destroy /posts/:id
router.delete('/:id', (req, res, next) => {
  res.send('DESTROY /posts');
});

module.exports = router;

/*
  GET index   /posts
  GET new     /posts/new
  POST create /posts
  GET show    /posts/:id
  GET edit    /posts/:id/edit
  PUT update  /posts/:id
  DELETE destroy /posts/:id
*/