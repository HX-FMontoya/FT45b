require("dotenv").config();
const { URL } = process.env;
const axios = require("axios");
const sequelize = require("../../db");
const { Op } = require("sequelize");

const getAllUser = async (req, res) => {
  try {
    const { User } = sequelize.models;
    let users = await User.findAll();
    console.log(users.length);
    if (users.length === 0) {
      const { data } = await axios(`${URL}/users`);
      const users_Api = data.map(({ email, name, phone }) => {
        return {
          name,
          email,
          phone,
        };
      });
      users = await User.bulkCreate(users_Api);
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = getAllUser;
