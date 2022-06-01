const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Race extends Model {}

Race.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    race: {
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
    modelName: "race",
  }
);

module.exports = Race;
