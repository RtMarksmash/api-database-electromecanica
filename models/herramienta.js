const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Colaborador = require('./colaborador');

const Herramienta = sequelize.define('Herramienta', {
  Id_herramienta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Descripcion: DataTypes.STRING,
  Cantidad: DataTypes.INTEGER,
  Fecha_de_entrega: DataTypes.DATEONLY,
  Orden_open_numero: DataTypes.STRING,
  Estado: DataTypes.STRING,
  Observacion: DataTypes.STRING
}, {
  tableName: 'Herramienta',
  timestamps: false
});

Herramienta.belongsTo(Colaborador, {
  foreignKey: 'Colaborador_id'
});
Colaborador.hasMany(Herramienta, {
  foreignKey: 'Colaborador_id'
});

module.exports = Herramienta;
