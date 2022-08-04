const router = require('express').Router();

const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js.js.js');
// const dashboardRoutes = require('./dashboard-routes.js.js.js');

// router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;