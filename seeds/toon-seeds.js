const sequelize = require('../config/connection');
const { Toon } = require('../models');

const toonData = [
  {
    toonName: 'Frank',
    gender: 'male',
    race: 'elf',
    toonClass: 'fighter',
    backstory: 'im an elf',
    user_id: 1
  },
  {
    toonName: 'The',
    gender: 'male',
    race: 'elf',
    toonClass: 'fighter',
    backstory: 'im an elf',
    user_id: 2
  },
  {
    toonName: 'Tank',
    gender: 'male',
    race: 'elf',
    toonClass: 'fighter',
    backstory: 'im an elf',
    user_id: 2
  },
];

const seedToon = () =>
  Toon.bulkCreate(toonData);

module.exports = seedToon;