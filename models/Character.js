const { Sequelize, DataTypes, Model } = require("sequelize");

class Character extends Model {}

Character.init(
  {
    character_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      notEmpty: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    backstory: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
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
