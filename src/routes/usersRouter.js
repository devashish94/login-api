const express = require('express');
const controller = require('../controllers/usersController');
const router = express.Router();

router
  .get('/health', controller.health)
  .get('/all', controller.getAll)
// router.patch('/:username', controller.update);
// router.delete(':/username', controller.delete);

module.exports = router;