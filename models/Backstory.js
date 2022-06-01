const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Backstory extends Model {}

Backstory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    modelName: "backstory",
  }
);

module.exports = Backstory;
