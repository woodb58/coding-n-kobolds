const sequelize = require('../config/connection');
const seedClass = require('./class-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedClass();
    console.log('--------------');

    process.exit(0);
};

seedAll();