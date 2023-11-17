const { DataTypes } = require('sequelize');

// Exportamos una función que define el modelo de plataforma
// y le inyectamos la conexión a Sequelize.
module.exports = (sequelize) => {
  // Definimos el modelo de plataforma
  sequelize.define('platform', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    timestamps: false // Desactivamos las marcas de tiempo (createdAt y updatedAt) en este modelo
  });
};
