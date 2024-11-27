const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Certificate = sequelize.define('Certificate', {
  id: { type: DataTypes.STRING, primaryKey: true },
  batchCode: DataTypes.STRING,
  state: DataTypes.STRING,
  price: DataTypes.STRING,
  descriptionHash: DataTypes.STRING,
  productionDate: DataTypes.DATE,
  signature: DataTypes.STRING,
});

module.exports = Certificate;
