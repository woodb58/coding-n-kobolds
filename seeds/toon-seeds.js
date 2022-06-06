const sequelize = require('../config/connection');
const { Toon } = require('../models');

const toonData = [
  {
    name: 'Frank',
    gender: 'male',
    race: 'elf',
    class: 'fighter',
    backstory: 'im an elf',
    user_id: 1
  },
  {
    name: 'The',
    gender: 'male',
    race: 'elf',
    class: 'fighter',
    backstory: 'im an elf',
    user_id: 2
  },
  {
    name: 'Tank',
    gender: 'male',
    race: 'elf',
    class: 'fighter',
    backstory: 'im an elf',
    user_id: 2
  },
];

const seedToon = () =>
  Toon.bulkCreate(toonData);

module.exports = seedToon;