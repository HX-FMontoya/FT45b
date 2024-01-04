const { users } = require("../../db/index")

async function deleteUser(req, res) {
    try {
    const { id } = req.params;
    let promise = new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (isNaN(Number(id))) {
          reject("El id debe ser un numero");
        } else {
          users.filter((user) => user.id !== id);
          resolve(`Usuario con id ${id} borrado con exito`);
        }
      }, 1000);
    });
    const result = await promise;
    res.status(202).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = deleteUser
