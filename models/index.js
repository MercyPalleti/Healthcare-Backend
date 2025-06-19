const sequelize = require('../config/database');
const User = require('./user');
const Patient = require('./patient');
const Doctor = require('./doctor');
const Mapping = require('./mapping');

User.hasMany(Patient);
Patient.belongsTo(User);

module.exports = { sequelize, User, Patient, Doctor, Mapping };
