const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define('User', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true,  
        allowNull: false 
      },
      name: {
        type: DataTypes.STRING, 
        allowNull: false 
      },
      lastname: {
        type: DataTypes.STRING, 
        allowNull: false 
      },
      nickname: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null 
      },
      uid: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
      },
      Email: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true, 
        validate: {
          isEmail: true 
        }
      },
      country: {
        type: DataTypes.STRING, 
        allowNull: true,
        defaultValue: null
      },
      image: {
        type: DataTypes.STRING, 
        allowNull: false, 
        defaultValue: 'https://i.ibb.co/ypHpjDN/Whats-App-Image-2023-11-03-at-7-56-13-PM.jpg' 
      },
      coverImage: {
        type: DataTypes.STRING, 
        allowNull: false, 
        defaultValue: 'https://i.ibb.co/ypHpjDN/Whats-App-Image-2023-11-03-at-7-56-13-PM.jpg' 
      },
      logincount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:false
      },
      banstatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    }, {
      timestamps: true 
  })};
  