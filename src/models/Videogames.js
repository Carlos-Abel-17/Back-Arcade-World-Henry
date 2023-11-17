const { DataTypes } = require("sequelize");

// Exportamos una función que define el modelo de videojuego (Videogame)
// e inyectamos la conexión a Sequelize.
module.exports = (sequelize) => {
  // Definimos el modelo de videojuego
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true, 
      allowNull: false 
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true 
    },
    description: {
      type: DataTypes.TEXT, 
      allowNull: false 
    },
    image: {
      type: DataTypes.TEXT, 
      allowNull: false,
      defaultValue: 'https://t.ly/Qpkyu'
    },
    price: {
      type: DataTypes.FLOAT, //
      allowNull: false 
    },
    released: {
      type: DataTypes.DATEONLY, // (yyyy-mm-dd)
      allowNull: false 
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {
    timestamps: true 
  });
};