// const pool = require('../models/database/config')
const db = require('../models/UserSchema')

module.exports = {
  fetch: async function(req, res) {
    // const SQL = 'select * from users';
    // const [result] = await pool.query(SQL);
    // return response.json(result);  
    const users = await db.findAll()
    return res.json({
      users: users
    }) 
  }
}
