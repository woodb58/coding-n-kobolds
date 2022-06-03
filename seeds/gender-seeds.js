const { Gender } = require("../models");

const genderData = [
  {
    gender: "Female",
  },
  {
    gender: "Male",
  },
  {
    gender: "Non-binary",
  },
  {
    gender: "used-to-be-male",
  },
];

const seedGender = () =>
  Gender.bulkCreate(genderData, { individualHooks: true });

module.exports = seedGender;
