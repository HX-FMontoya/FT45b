const sequelize = require("../../db");
const postUser = async (req, res) => {
  try {
    // INSERT INTO user (name, email) VALUES ('Feli','f@f.com'), ();
    // user, country -> carpeta models -> las tablas
    const { User } = sequelize.models;
    const { body } = req;
    const response = await User.create(body);
    // await response.save();
    console.log(response);
    res.status(201).json(body);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = postUser;
