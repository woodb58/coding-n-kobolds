const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const toonRoutes = require('./toon-routes.js')

router.use('/user', userRoutes)
router.use('/toon', toonRoutes)


module.exports = router;