require("dotenv").config();
const { URL } = process.env;
const axios = require("axios");
const sequelize = require("../../db");
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { User } = sequelize.models;
    //const { data } = await axios(`${URL}/users/${id}`);
    const user = await User.findByPk(id);
    await User.truncate()
    // haciamos la simulacion de que llenabamos la base de datos
    // const user = await User.findByPk(id)
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = getUserById;


// User
// id  name email     country
// 1   Feli  f@f.com     null

//Country
// id name
// 

// user_country
// id id_user id_country
// 1    1          1