const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Purchase', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true,  
        allowNull: false 
      },
    amount: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'stripe'
    },
  }, {
    timestamps: true,
    updatedAt: false
  });
};
