require("dotenv").config();
const { URL } = process.env;
const axios = require("axios");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getUserById;
