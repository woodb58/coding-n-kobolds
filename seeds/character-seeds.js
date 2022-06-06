const { Character } = require("../models");

const characterData = [
  {
    name: 'Frank',
    gender: 'male',
    race: 'elf',
    backstory: 'im an elf',
    class: 'fighter',
    user_id: 1
  },
  {
    name: 'The',
    gender: 'male',
    race: 'elf',
    backstory: 'im an elf',
    class: 'fighter',
    user_id: 2
   
  },
  {
    name: 'Tank',
    gender: 'male',
    race: 'elf',
    backstory: 'im an elf',
    class: 'fighter',
    user_id: 3
   
  },
];

const seedCharacter = () =>
  Character.bulkCreate(characterData, { individualHooks: true });

module.exports = seedCharacter;