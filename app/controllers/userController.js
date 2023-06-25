const Users = require('../models/UserSchema');
const userService = require('../services/userService');

module.exports = {
  fetch: async (req, res) => {
    const users = await Users.findAll()
    return res.json(users)
  },

  register: async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const createUserProcess = await userService.createUser(username, password);    
    
    if (createUserProcess.error) {
      return res.status(404).json({
        status: 'FAIL',
        statusCode: 404,
        errorDescription: createUserProcess.message
      })
    }
    return res.json({
      status: 'OK',
      statusCode: 200,
      message: 'User successfully registered',
      username: username
    })
  },

  login: async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const loginProcess = await userService.loginUser(username, password);

    if (loginProcess.error) {
      return res.status(404).json({
        status: 'FAIL',
        statusCode: 404,
        errorDescription: loginProcess.message
      })
    }
    return res.json({
      status: 'OK',
      statusCode: 200,
      message: 'User successfully logged in',
      username: loginProcess.username
    })
  }
}
