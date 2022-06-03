const Attributes = require("./Attributes");
const User = require("./User");
const Character = require("./Character");
const Race = require("./Race");
const Gender = require("./Gender");
const Class = require("./Class");
const Backstory = require("./Backstory");


User.hasMany(Character, { foreignKey: "character_id", onDelete: "CASCADE" });

Character.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

Race.belongsToMany(Character, { foreignKey: "race_id", through: Attributes });

Gender.belongsToMany(Character, { foreignKey: "gender_id", through: Attributes });

Class.belongsToMany(Character, { foreignKey: "class_id", through: Attributes });

Backstory.belongsToMany(Character, { foreignKey: "backstory_id", through: Attributes });

module.exports = {
  Attributes,
  User,
  Character,
  Gender,
  Race,
  Class,
  Backstory,
};


