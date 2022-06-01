const { Race } = require("../models");

const raceData = [
  {
    race: 'Elf',
  },
];

const seedRace = () => Race.bulkCreate(raceData, { individualHooks: true });

module.exports = seedRace;