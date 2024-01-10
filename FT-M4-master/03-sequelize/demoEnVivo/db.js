require("dotenv").config();
const { DB, DB_PORT, DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const { Sequelize } = require("sequelize");
const user = require("./models/User");
const country = require("./models/Country");

const sequelize = new Sequelize(
  `${DB}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: console.log("estas logueado"),
  }
);

user(sequelize);
country(sequelize);

const { User, Country } = sequelize.models;

User.belongsToMany(Country, { through: "user_country" });
Country.belongsToMany(User, { through: "user_country" });

module.exports = sequelize;
