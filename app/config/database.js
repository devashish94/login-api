const Sequelize = require('sequelize')
const constants = require('../utils/constants')

const sequelize = new Sequelize(constants.database, 'root', 'a', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        freezeTableName: true,
        timestamps: false
    }
})

module.exports = sequelize
