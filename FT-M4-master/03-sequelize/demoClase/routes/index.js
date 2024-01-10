const router = require("express").Router()
const { getAllUsers, getUserById, postUser } = require("../controllers/index")

router.get("/users", getAllUsers)
router.get("/users/:id", getUserById);
router.post("/users", postUser);

module.exports = router