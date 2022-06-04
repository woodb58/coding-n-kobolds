const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const createCharacterRoutes = require('./create-character-routes.js');

router.use('/user', userRoutes)
router.use('/create-character', createCharacterRoutes)


module.exports = router;