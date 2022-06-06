const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Attributes extends Model {}

Attributes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    modelName: "attributes",
  }
);

module.exports = Attributes;
