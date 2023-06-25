const path = require('path');
const mysql = require('mysql2/promise')
const databaseName = require('../utils/constants').database
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

exports.initializeDatabase =  async function() {
    try {
        const db = mysql.createPool({
            host: process.env.DB_HOST || 'localhost', 
            user: process.env.DB_USER || 'root', 
            password: process.env.DB_PASSWORD
        })
        await db.query('CREATE DATABASE IF NOT EXISTS ??', [databaseName])
        db.end()
    } catch(err) {
        console.log('DB PASSWORD is wrong')
    }
}
