const { Character } = require("../models");

const characterData = [
  {
    name: 'Frank',
  },
  {
    name: 'The',
  },
  {
    name: 'Tank',
  },
];

const seedCharacter = () =>
  Character.bulkCreate(characterData, { individualHooks: true });

module.exports = seedCharacter;