const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Colaborador = require('./colaborador');

const Dotacion = sequelize.define('Dotacion', {
  Id_dotacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Descripcion: DataTypes.STRING,
  Talla: DataTypes.STRING,
  Cantidad: DataTypes.INTEGER,
  Fecha_de_entrega: DataTypes.DATEONLY,
  Estado: DataTypes.STRING,
  Observacion: DataTypes.STRING
}, {
  tableName: 'Dotacion',
  timestamps: false
});

Dotacion.belongsTo(Colaborador, {
  foreignKey: 'Colaborador_id'
});
Colaborador.hasMany(Dotacion, {
  foreignKey: 'Colaborador_id'
});

module.exports = Dotacion;
