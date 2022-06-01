const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'alesmonde0',
        email: 'nwestnedge0@cbc.ca',
        password: 'password123'
    },
    {
        username: 'jwilloughway1',
        email: 'rmebes1@sogou.com',
        password: 'password123'
    },
    {
        username: 'iboddam2',
        email: 'cstoneman2@last.fm',
        password: 'password123'
    },
    {
        username: 'dstanmer3',
        email: 'ihellier3@goo.ne.jp',
        password: 'password123'
    },
    {
        username: 'djiri4',
        email: 'gmidgley4@weather.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
