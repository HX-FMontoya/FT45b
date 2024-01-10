require("dotenv").config();
const { URL } = process.env;
const axios = require("axios");

const getAllUsers = async (req, res) => {
  try {
    const { data } = await axios(URL);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getAllUsers