const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Ownership = sequelize.define('Ownership', {
  certificateId: DataTypes.STRING,
  previousOwner: DataTypes.STRING,
  newOwner: DataTypes.STRING,
  timestamp: DataTypes.DATE,
});

module.exports = Ownership;
