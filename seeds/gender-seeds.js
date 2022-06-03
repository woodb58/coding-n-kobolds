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
];

const seedGender = () =>
  Gender.bulkCreate(genderData, { individualHooks: true });

module.exports = seedGender;
