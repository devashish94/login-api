const pool = require('../models/database/config')

module.exports = {
  login: async function(request, response) {
    if (!request.body || request.body.username === '' || request.body.password === '') {
      return response.json({
        status: 'FAIL',
        statusCode: 400,
        message: 'username or password cannot be empty'
      })
    }
  
    try {
      const SQL = 'select username, password from users where username = ?';
      const [result] = await pool.query(SQL, [request.body.username]);
      if (result[0].username === request.body.username && result[0].password === request.body.password) {
        return response.json({
          status: 'OK',
          statusCode: 200,
          username: request.body.username,
          message: 'successfully logged in',
        })
      } else {
        throw new Error('password is not same')
      }
    } catch(err) {
      return response.json({
        status: 'OK',
        statusCode: 400,
        message: 'Invalid username or password',
      })
    }
  }
}
