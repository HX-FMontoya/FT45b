const deleteUser = require("../../controllers/users/deleteUser");
const getAllUsers = require("../../controllers/users/getAllUsers");
const getUserById = require("../../controllers/users/getUserById");
const postUser = require("../../controllers/users/postUser");

const router = require("express").Router()
// http:localhost:3001/users/
router.get("/", getAllUsers)
// http:localhost:3001/users/:id
router.get("/:id", getUserById);
router.post("/", postUser)
router.delete("/:id", deleteUser)

module.exports = router