const Users = require('../models/UserSchema')

module.exports = {
  fetch: async function(req, res) {
    const users = await Users.findAll()
    return res.json({users})
  },
  register: async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = await Users.findOne({
      where: {
        username: username
      }
    })
    if (user) {
      return res.status(200).json({
        status: 'FAIL',
        statusCode: 400,
        message: `User with the username '${username}' already exists`
      })
    }
    await Users.create({
      username: username,
      password: password 
    })
    return res.json({
      status: 'OK',
      statusCode: 200,
      message: `User successfully registered`,
      username: username
    })
  }
}
