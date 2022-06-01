const sequelize = require('../config/connection');
const seedClass = require('./class-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedClass();
    console.log('--------------');





    // await seedBACKSTORY();



    // await seedUSER();



    // await seedCHARACTER();



    // await seedGENDER();



    // await seedNAME();



    // await seedRACE();





    process.exit(0);
};

seedAll();