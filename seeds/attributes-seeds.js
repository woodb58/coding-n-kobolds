const { Attributes } = require("../models");

const attributesData = [
  {
    gender_id: 1,
    race_id: 1,
    class_id: 1,
    backstory_id: 1
  },
  {
    gender_id: 2,
    race_id: 2,
    class_id: 2,
    backstory_id: 2
  },
  {
    gender_id: 3,
    race_id: 3,
    class_id: 3,
    backstory_id: 3
  }
];

const seedAttributes = () => Attributes.bulkCreate(attributesData);

module.exports = seedAttributes