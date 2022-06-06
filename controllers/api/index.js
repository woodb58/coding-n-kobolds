const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const createToonRoutes = require('./create-toon-routes.js');

router.use('/user', userRoutes)
router.use('/create-toon', createToonRoutes)


module.exports = router;