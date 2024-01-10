require("dotenv").config();
const { DBMS, USER, PASSWORD, HOST_DB, PORT_DB, NAME_DB } = process.env;
const { Sequelize, DataTypes, UUIDV4 } = require("sequelize");

const sequelize = new Sequelize(
  `${DBMS}://${USER}:${PASSWORD}@${HOST_DB}:${PORT_DB}/${NAME_DB}`,
  {
    logging: false,
  }
); // Example for postgres

sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
    },
  },
  {
    timestamps: false,
  }
);

sequelize.define("Country", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const { User, Country } = sequelize.models;
User.belongsToMany(Country, { through: "user_country" });
Country.belongsToMany(User, { through: "user_country" });

module.exports = sequelize;
