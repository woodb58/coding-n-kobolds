const sequelize = require("../config/connection");

const seedToon = require("./toon-seeds");
const seedUsers = require("./user-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");

  await seedUsers();
  console.log("--------------");

  await seedToon();
  console.log("--------------");

  process.exit(0);
};

seedAll();
