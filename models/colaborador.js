const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Colaborador = sequelize.define('Colaborador', {
  Colaborador_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: DataTypes.STRING,
  Apellido: DataTypes.STRING,
  Profesion: DataTypes.STRING,
  Cargo: DataTypes.STRING,
  Fecha_de_nacimiento: DataTypes.DATEONLY,
  Fecha_de_ingreso: DataTypes.DATEONLY,
  Direccion: DataTypes.STRING,
  Telefono_corporativo: DataTypes.STRING,
  Telefono_personal: DataTypes.STRING,
  Tipo_de_sangre: DataTypes.STRING,
  Novedad: DataTypes.STRING,
}, {
  tableName: 'Colaborador',
  timestamps: false
});

module.exports = Colaborador;
