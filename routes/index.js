const express = require('express');
const { showHomePage } = require('../controllers/pages-controller');
const { getAllTrips } = require('../controllers/trips-controller');
const router = express.Router();

router.get('/', getAllTrips, showHomePage);

module.exports = router;
