const db_user = require("../../utils/db-temp");
const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const filtered = db_user.filter((user) => user.id !== id);
    res
      .status(203)
      .send({ data: filtered, mesagge: `user ${id} borrado con exito` });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = deleteUser;
