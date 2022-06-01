const { Character } = require("../models");

const characterData = [
  {
    name: 'Frank',
  },
];

const seedCharacter = () =>
  Character.bulkCreate(characterData, { individualHooks: true });

module.exports = seedCharacter;