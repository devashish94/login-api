const path = require('path')
const Sequelize = require('sequelize')
const constants = require('../utils/constants')
const ko = require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const hostname = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(constants.database, user, password, {
    dialect: 'mysql',
    host: hostname,
    define: {
        freezeTableName: true,
        timestamps: false
    }
})

module.exports = sequelize
