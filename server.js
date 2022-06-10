const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "project 2 super secret cookie secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};



app.use(session(sess));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(routes);
app.use(express.static("assets/images"));



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`listening`));
});
