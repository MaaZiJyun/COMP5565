const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const AuditTrail = sequelize.define('AuditTrail', {
  certificateId: DataTypes.STRING,
  participantId: DataTypes.STRING,
  action: DataTypes.STRING,
  timestamp: DataTypes.DATE,
});

module.exports = AuditTrail;
