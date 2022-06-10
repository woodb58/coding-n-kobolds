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

router.get("/user", (req, res) => {
  console.log("======================");
  console.log(req.session.user)

  Toon.findAll({
    attributes: [
      "id",
      "toonName",
      "gender",
      "race",
      "toonClass",
      "backstory"
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbUserData) => {
      console.log(dbUserData[0]);
      const toon = dbUserData.map((dbUserData) => dbUserData.get({ plain: true }));
      res.render("user", { toon, user: req.session.user });
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

module.exports = router;
