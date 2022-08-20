const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homecontroller');

router.get('/home',homeController.getIndex);

module.exports = router;