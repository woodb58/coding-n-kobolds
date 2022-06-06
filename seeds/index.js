const sequelize = require("../config/connection");
const seedCharacter = require("./character-seeds");
const seedUsers = require("./user-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");

  await seedUsers();
  console.log("--------------");

  await seedCharacter();
  console.log("--------------");

  process.exit(0);
};

seedAll();
