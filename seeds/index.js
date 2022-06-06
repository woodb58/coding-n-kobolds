const sequelize = require('../config/connection');
const seedClass = require('./class-seeds');
const seedBackstory = require('./backstory-seeds');
const seedCharacter = require('./character-seeds');
const seedGender = require('./gender-seeds');
const seedRace = require('./race-seeds');
const seedUsers = require('./user-seeds');
const seedAttributes = require('./attributes-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedClass();
    console.log('--------------');

    await seedUsers();
    console.log('--------------');

    await seedBackstory();
    console.log('--------------');

    await seedCharacter();
    console.log('--------------');

    await seedGender();
    console.log('--------------');

    await seedRace();
    console.log('--------------');
    
    await seedAttributes();
    console.log('--------------');


    process.exit(0);

};

seedAll();