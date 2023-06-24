const mysql = require('mysql2/promise')
const databaseName = require('../utils/constants').database

exports.initializeDatabase =  async function() {
    const db = mysql.createPool({
        host: 'localhost', 
        user: 'root', 
        password: 'a'
    })
    await db.query('CREATE DATABASE IF NOT EXISTS ??', [databaseName])
    db.end()
}
