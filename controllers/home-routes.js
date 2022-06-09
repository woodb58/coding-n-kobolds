const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");
const { Toon, User } = require("../models");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/static", (req, res) => {
  res.render("static");
});

router.get("/dynamic", (req, res) => {
  imageList = [];
  imageList.push({ src: "Dwarf-female.png", name: "Dwarf-Female" });
  imageList.push({ src: "Dwarf-male.png", name: "Dwarf-Male" });
  imageList.push({ src: "Elf-female.png", name: "Elf-Female" });
  imageList.push({ src: "Elf-male.png", name: "Elf-Male" });
  imageList.push({ src: "Human-female.png", name: "Human-Female" });
  imageList.push({ src: "Human-male.png", name: "Human-Male" });
  imageList.push({ src: "Orc-female.png", name: "Orc-Female" });
  imageList.push({ src: "Orc-male.png", name: "Orc-Male" });

  res.render("dynamic", { imageList: imageList });
});

router.get("/user", (req, res) => {
  console.log("======================");
  Toon.findAll({
    attributes: ["id", "toonName", "gender", "race", "toonClass", "backstory"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbToonData) => {
      console.log(dbToonData[0]);
      const toon = dbToonData.map((toon) => toon.get({ plain: true }));
      res.render("user", { toon });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/create-toon", (req, res) => {
  res.render("create-toon");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/create-toon", (req, res) => {
  res.render("create-toon");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
