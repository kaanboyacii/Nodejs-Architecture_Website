const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homecontroller');

router.get('/anasayfa',homeController.getIndex);
router.get('/hakkimizda',homeController.getAboutPage);
router.get('/projelerimiz',homeController.getProjectPage);
router.get('/iletisim',homeController.getContactPage);
router.get('/servislerimiz',homeController.getServicesPage);

module.exports = router;