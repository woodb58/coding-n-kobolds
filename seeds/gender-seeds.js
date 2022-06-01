const { Gender } = require("../models");

const genderData = [
  {
    gender: "Female",
  },
];

const seedGender = () =>
  Gender.bulkCreate(genderData, { individualHooks: true });

module.exports = seedGender;
