const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('Patient', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  gender: DataTypes.STRING,
  userId: DataTypes.INTEGER
});

module.exports = Patient;
