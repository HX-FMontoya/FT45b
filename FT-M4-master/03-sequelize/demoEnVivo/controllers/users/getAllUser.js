require("dotenv").config();
const { URL } = process.env;
const axios = require("axios");
const sequelize = require("../../db");

const getAllUser = async (req, res) => {
  try {
    // const { data } = await axios(`${URL}/users`);
    const { User } = sequelize.models;
    const data = await User.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = getAllUser;
