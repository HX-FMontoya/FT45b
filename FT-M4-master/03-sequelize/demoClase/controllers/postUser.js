const sequelize = require("../db");
const { User } = sequelize.models;

const postUser = async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    const user = await User.create(body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = postUser;
