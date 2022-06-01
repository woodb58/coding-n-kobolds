const sequelize = require('../config/connection');
const seedClass = require('./class-seeds');
const seedBackstory = require('./backstory-seeds');
const seedCharacter = require('./character-seeds');
const seedGender = require('./gender-seeds');
const seedName = require('./name-seeds');
const seedRace = require('./race-seeds');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedClass();
    console.log('--------------');

    await seedUsers();
    console.log('--------------');

    // await seedBackstory();




    // await seedCharacter();




    // await seedGender();




    // await seedName();




    // await seedRace();





    process.exit(0);
};

seedAll();