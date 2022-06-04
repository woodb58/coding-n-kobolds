const router = require("express").Router();
const sequelize = require('../config/connection');
// const withAuth = require("../utils/auth");

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/user', (req, res) => {
    res.render('user')
});

router.get('/create-character', (req, res) => {
    res.render('create-character')
});

module.exports = router;
