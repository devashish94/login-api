const Sequelize = require('sequelize')
const sequelize = require('../config/database')

const userSchema = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false   
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false   
    },
})

module.exports = userSchema;
