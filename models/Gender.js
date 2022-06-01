const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Gender extends Model {}

Gender.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gender: {
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
    modelName: "gender",
  }
);

module.exports = Gender;
