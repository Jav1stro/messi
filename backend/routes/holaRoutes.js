const express = require('express');
const router = express.Router();
const holaController = require('./../controllers/holaController');

router.get("/", holaController.index);
router.get("/como", holaController.como);

module.exports = router;