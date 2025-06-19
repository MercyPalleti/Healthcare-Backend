const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Doctor = sequelize.define('Doctor', {
  name: DataTypes.STRING,
  specialization: DataTypes.STRING
});

module.exports = Doctor;
