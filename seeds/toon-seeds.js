const sequelize = require('../config/connection');
const { Toon } = require('../models');

const toonData = [
  {
    name: 'Frank',
    gender: 'male',
    race: 'elf',
    class: 'fighter',
    backstory: 'im an elf'
  },
  {
    name: 'The',
    gender: 'male',
    race: 'elf',
    class: 'fighter',
    backstory: 'im an elf'
  },
  {
    name: 'Tank',
    gender: 'male',
    race: 'elf',
    class: 'fighter',
    backstory: 'im an elf'
  },
];

const seedToon = () =>
  Toon.bulkCreate(toonData);

module.exports = seedToon;