const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {
  static importAttributes(body, models) {
    return models.Attributes.create({
      backstory_id: body.backstory_id,
      class_id: body.class_id,
      race_id: body.race_id,
      gender_id: body.gender_id
    }).then(() => {
      return Character.findOne({
        where: {
          id: body.character_id
        },
        include: [
          {
            model: Backstory,
            model: Class,
            model: Gender,
            model: Race, 
          }
        ]
      })
    })
  }
}

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
    attributes_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'attributes',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
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
