const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Colaborador = require('./colaborador');

const ElementosProteccion = sequelize.define('ElementosProteccion', {
  Id_elemento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Descripcion: DataTypes.STRING,
  Cantidad: DataTypes.INTEGER,
  Fecha_de_entrega: DataTypes.DATEONLY,
  Estado: DataTypes.STRING,
  Observacion: DataTypes.STRING
}, {
  tableName: 'Elementos_de_proteccion',
  timestamps: false
});

ElementosProteccion.belongsTo(Colaborador, {
  foreignKey: 'Colaborador_id'
});
Colaborador.hasMany(ElementosProteccion, {
  foreignKey: 'Colaborador_id'
});

module.exports = ElementosProteccion;
