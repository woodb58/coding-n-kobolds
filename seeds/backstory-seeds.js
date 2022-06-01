const { Backstory } = require("../models");

const backstoryData = [
  {
    backstory: "Caldor was a simple elf, he came to chew bubble gum and playing the lute... and tonight Caldor is all out of bubble gum ",
  },
];

const seedBackstory = () =>
  Backstory.bulkCreate(backstoryData, { individualHooks: true });

module.exports = seedBackstory;
