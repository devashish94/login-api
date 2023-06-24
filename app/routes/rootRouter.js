
const express = require('express');
const router = express.Router();
const rootController = require('../controllers/rootController.js');

router
  .get('/server-status', rootController.status)
  .get('/available', rootController.availableRoutes)
  
module.exports = router;
