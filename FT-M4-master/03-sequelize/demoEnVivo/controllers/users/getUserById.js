require("dotenv").config();
const { URL } = process.env;
const axios = require("axios");
const sequelize = require("../../db");
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const {User} = sequelize.models
    // const { data } = await axios(`${URL}/users/${id}`);
    // haciamos la simulacion de que llenabamos la base de datos
    const user = await User.findByPk(id)
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = getUserById;
