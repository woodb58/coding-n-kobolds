const sequelize = require('../config/connection');
const { Class } = require('../models/Class');

const classData = [
    {
        class: 'Fighter',
    }
]

const seedClass = () => Class.bulkCreate(classData, { individualHooks: true });


module.exports = seedClass
