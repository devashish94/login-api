const pool = require('../models/database/config');

module.exports = {
  register: async function (request, response) {
    if (!request.body || request.body.username === '' || request.body.password === '') {
      return response.json({
        status: 'FAIL',
        statusCode: 400,
        message: 'username or password cannot be empty'
      })
    }

    try {
      const SQL = 'insert into users values (?, ?)';
      await pool.query(SQL, [request.body.username, request.body.password]);
      return response.json({
        status: 'OK',
        statusCode: 200,
        username: request.body.username,
        message: 'user profile successully created',
      });
    } catch (err) {
      return response.json({
        status: 'FAIL',
        statusCode: 400,
        message: `username '${request.body.username}' already taken`,
      })
    }
  }
}