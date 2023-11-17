const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Definimos el modelo de género
  sequelize.define('VG_user', {
    favorites: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    review: {
        type: DataTypes.JSONB,//{value: "review", editedAt: Date }
        defaultValue: null,
        get() {
          const reviewData = this.getDataValue('review');
          return reviewData === null
          ? null
          : {
            value: reviewData?.value,
            editedAt: new Date(reviewData.editedAt),
          };
        },
        set(value) {
          if(value === null){
            this.setDataValue('review', null)
          }else{
            this.setDataValue('review', {
              value,
              editedAt: new Date(),
            })}
          }
      },
    graphics: {
        type: DataTypes.INTEGER,
        validate: {
            isIn: {
              args: [[0, 1, 2, 3, 4, 5]],
              msg: 'El valor debe ser 0, 1, 2, 3, 4 o 5',
            },
        },
        defaultValue:null
    },
    gameplay: {
        type: DataTypes.INTEGER,
        validate: {
            isIn: {
              args: [[0, 1, 2, 3, 4, 5]],
              msg: 'El valor debe ser 0, 1, 2, 3, 4 o 5',
            },
        },
        defaultValue:null
    },
    quality_price: {
        type: DataTypes.INTEGER,
        validate: {
            isIn: {
              args: [[0, 1, 2, 3, 4, 5]],
              msg: 'El valor debe ser 0, 1, 2, 3, 4 o 5',
            },
        },
        defaultValue:null
    },
    }, {timestamps: false})
};
