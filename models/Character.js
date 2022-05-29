const { Sequelize, DataTypes, Model } = require("sequelize");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "name",
        key: "id",
      },
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "gender",
        key: "id",
      },
    },
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "race",
        key: "id",
      },
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "class",
        key: "id",
      },
    },
    backstory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "backstory",
        key: "id",
      },
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
