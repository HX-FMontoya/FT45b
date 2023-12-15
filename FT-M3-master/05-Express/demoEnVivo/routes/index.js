const router = require("express").Router();

// users
router.get("/users", (req, res) => {
  res.send("Get users");
});

//movies
router.get("/movies", (req, res) => {
  res.send("Get movies");
});

module.exports = router;
