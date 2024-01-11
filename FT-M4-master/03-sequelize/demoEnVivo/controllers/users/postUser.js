const sequelize = require("../../db");
const postUser = async (req, res) => {
  try {
    // INSERT INTO user (name, email) VALUES ('Feli','f@f.com'), ();
    // user, country -> carpeta models -> las tablas
    const { User } = sequelize.models;
    const { body } = req;
    let user = await User.create(body);
    /* await user.update({ name: "Alejo" }, { where: { name: "user 19" } }); */
    user.name = user.name.toUpperCase();
    console.log(user);
    await user.destroy();
    /* const user = User.build(body);
    await user.save(); */
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = postUser;
