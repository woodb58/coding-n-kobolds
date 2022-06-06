const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'alesmonde0',
        email: 'nwestnedge0@cbc.ca',
        password: 'password123',
        character_id: 1
    },
    {
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password123',
        character_id: 2
    },
    {
        username: 'iboddam2',
        email: 'cstoneman2@last.fm',
        password: 'password123',
        character_id: 3
    },
   
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
