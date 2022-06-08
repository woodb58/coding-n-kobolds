const LocalStrategy = require("passport-local");
const passport = require("passport");
const PasswordPrompt = require("inquirer/lib/prompts/password");
const db = (require = "../db");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const result = await db
      .promise()
      .query(`SELECT * FROM USERS WHERE USERNAME = '${username}'`);
    console.log(result);
  })
);
