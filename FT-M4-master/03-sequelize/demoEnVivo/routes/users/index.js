const router = require("express").Router();
const getAllUser = require("../../controllers/users/getAllUser");
const getUserById = require("../../controllers/users/getUserById");
const postUser = require("../../controllers/users/postUser");
const deleteUser = require("../../controllers/users/deleteUser");

const url = `${URL}/users`;
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", postUser);
router.delete("/:id", deleteUser);

module.exports = router;
