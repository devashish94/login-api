const express = require('express');
const controller = require('../controllers/userController');
const router = express.Router();

router
  .get('/users/fetch', controller.fetch)
  .post('/user/login', controller.login)
  .post('/user/register', controller.register)

module.exports = router;
