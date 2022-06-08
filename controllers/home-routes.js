const router = require("express").Router();
const sequelize = require('../config/connection');
const withAuth = require("../utils/auth");
const { Toon, User } = require('../models');

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/user', (req, res) => {
    res.render('user')
});

router.get('/create-toon', (req, res) => {
    res.render('create-toon')
});

router.get('/signup', (req, res) => {
    res.render('signup')
});

module.exports = router;
