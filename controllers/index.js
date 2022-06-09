const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', userRoutes);

module.exports = router;