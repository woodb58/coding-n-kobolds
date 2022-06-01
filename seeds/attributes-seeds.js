const { Attributes } = require("../models");

const attributesData = [
  {
    gender_id: 1,
    race_id: 1,
    class_id: 1,
    backstory_id: 1,
  }
];

const seedAttributes = () => Attributes.bulkCreate(attributesData);

module.exports = seedAttributes