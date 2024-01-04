require("dotenv").config();
const { URL } = process.env;
const axios = require("axios");

function getUserById(req, res) {
  const { id } = req.params;
  axios(`${URL}/users/${id}`)
    .then(({ data }) => res.status(200).json(data))
    .catch((err) => res.status(500).send(err));
}

module.exports = getUserById;
