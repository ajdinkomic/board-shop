const express = require('express');
const router = express.Router();
const { postRegister, postLogin, getLogout } = require('../controllers');
const { errorHandler } = require('../middleware');

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', {
		title: 'Board Shop - Home'
	});
});

/* GET /register */
router.get('/register', (req, res, next) => {
	res.send('GET /register');
});

/* POST /register */
router.post('/register', errorHandler(postRegister));

/* GET /login */
router.get('/login', (req, res, next) => {
	res.send('GET /login');
});

/* POST /login */
router.post('/login', postLogin);

/* GET /logout */
router.post('/logout', getLogout);

/* GET /profile */
router.get('/profile', (req, res, next) => {
	res.send('GET /profile');
});

/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
	res.send('PUT /profile/:user_id');
});

/* GET /forgot-password */
router.get('/forgot', (req, res, next) => {
	res.send('GET /forgot');
});

/* PUT /forgot-password */
router.put('/forgot', (req, res, next) => {
	res.send('PUT /forgot');
});

/* GET /reset-password/:token */
router.get('/reset/:token', (req, res, next) => {
	res.send('GET /reset');
});

/* PUT /reset-password/:token */
router.put('/reset/:token', (req, res, next) => {
	res.send('PUT /reset');
});

module.exports = router;
