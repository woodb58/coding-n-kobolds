const User = require("./User");
const Toon = require("./Toon");



User.hasMany(Toon, { foreignKey: "user_id", onDelete: "CASCADE" });

Toon.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

module.exports = {
  User,
  Toon
};


