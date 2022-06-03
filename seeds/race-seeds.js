const { Race } = require("../models");

const raceData = [
  {
    race: 'Elf',
  },
  {
    race: 'Human',
  },
  {
    race: 'Orc',
  },
];

const seedRace = () => Race.bulkCreate(raceData, { individualHooks: true });

module.exports = seedRace;