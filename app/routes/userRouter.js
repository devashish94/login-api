const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router
  .get('/users/fetch', controller.fetch)
  .post('/user/login', controller.login)
  .post('/user/register', controller.register)

module.exports = router;
