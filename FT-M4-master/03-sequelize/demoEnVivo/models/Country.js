const { DataTypes } = require("sequelize");

const country = (sequelize) => sequelize.define("Country", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(25),
  },
});

module.exports = country