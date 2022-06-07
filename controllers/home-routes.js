const router = require("express").Router();
const sequelize = require('../config/connection');
// const withAuth = require("../utils/auth");

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/user', (req, res) => {
    res.render('user')
});

router.get('/toon', (req, res) => {
    res.render('toon')
});

router.get('/signup', (req, res) => {
    res.render('signup')
});

module.exports = router;
