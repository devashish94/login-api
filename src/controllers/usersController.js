const pool = require('../models/database/config')

module.exports = {
  health: function (request, response) {
    console.log(request);
    return response.json({
      status: "OK",
      statusCode: 200,
      message: "server is running correctly",
    })
  },
  getAll: async function(request, response) {
    const SQL = 'select * from users';
    const [result] = await pool.query(SQL);
    return response.json(result);  
  },
}
