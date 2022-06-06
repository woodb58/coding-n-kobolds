const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },

    race: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },

    class: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },

    backstory: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    user_id: {
      type: DataTypes.INTEGER,  
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "character",
  }
);

module.exports = Character;
