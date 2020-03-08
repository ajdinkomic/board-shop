const express = require('express');
const router = express.Router({
  mergeParams: true
}); // so we can pull post id from the route

// GET reviews index /posts/:id/reviews
router.get('/', (req, res, next) => {
  res.send('INDEX /posts/:id/reviews');
});

// we don't need route for new review
// GET reviews new /posts/:id/reviews/new - it must be before SHOW route
// router.get('/new', (req, res, next) => {
//   res.send('NEW /posts/:id/reviews/new');
// });

// POST reviews create /posts/:id/reviews
router.post('/', (req, res, next) => {
  res.send('CREATE /posts/:id/reviews');
});

// we don't need show page for review
// GET reviews show /posts/:id/reviews/:review_id
// router.get('/:id', (req, res, next) => {
//   res.send('SHOW /posts/:id/reviews/:review_id');
// });

// GET reviews edit /posts/:id/reviews/:review_id/edit
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/reviews/:review_id');
});

// PUT reviews update /posts/:id/reviews/:review_id
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id/reviews/:review_id');
});

// DELETE reviews destroy /reviews/:id
router.delete('/:id', (req, res, next) => {
  res.send('DESTROY /posts/:id/reviews/:review_id');
});

module.exports = router;

/*
  GET index   /reviews
  GET new     /reviews/new
  POST create /reviews
  GET show    /reviews/:id
  GET edit    /reviews/:id/edit
  PUT update  /reviews/:id
  DELETE destroy /reviews/:id
*/