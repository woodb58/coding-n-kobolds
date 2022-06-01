const { Class } = require('../models');

const classData = [
    {
        class: 'Fighter',
    }
]

const seedClass = () => Class.bulkCreate(classData);


module.exports = seedClass
