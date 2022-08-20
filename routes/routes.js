const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homecontroller');

router.get('/anasayfa',homeController.getIndex);
router.get('/hakkımızda',homeController.getAboutPage);
router.get('/projelerimiz',homeController.getProjectPage);

module.exports = router;