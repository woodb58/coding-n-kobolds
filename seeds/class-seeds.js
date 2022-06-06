const { Class } = require("../models");

const classData = [
  {
    class: "Fighter",
  },
  {
    class: "Also a Fighter",
  },
  {
    class: "Also a Fighter but just stands in back and looks cool",
  },
];

const seedClass = () => Class.bulkCreate(classData, { individualHooks: true });

module.exports = seedClass;

//get rid of the individualHooks code if this stops working because it did work
//when it was removed. Should ask why if it breaks with it included.
