const router = require('express').Router();

// set routes
const usersRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtRoutes');

// adding users & thoughts to created routes
router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

// export module router
module.exports = router;