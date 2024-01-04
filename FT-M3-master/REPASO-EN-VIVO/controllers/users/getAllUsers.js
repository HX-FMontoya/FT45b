require("dotenv").config()
const { URL } = process.env
const axios = require("axios")
const { users } = require("../../db/index")

//? Version async await
async function getAllUsers(req, res) {
  try {
    if (users.length === 0) {
      const { data } = await axios(`${URL}/users`);
      data.forEach((element) => {
        users.push(element);
      });
    }
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err.cause);
  }
}

module.exports = getAllUsers

