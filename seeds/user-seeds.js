const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'alesmonde0',
        password: 'password123'
    },
    {
        username: 'jwilloughway1',
        password: 'password123'
    },
    {
        username: 'iboddam2',
        password: 'password123'
    },

];

const seedUsers = () =>
    User.bulkCreate(userData);

module.exports = seedUsers;
