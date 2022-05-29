const { Sequelize, DataTypes, Model } = require("sequelize");

class Class extends Model {}

Class.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    class: {
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
    modelName: "class",
  }
);

module.exports = Class;
