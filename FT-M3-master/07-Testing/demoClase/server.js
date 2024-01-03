const express = require("express")
const server = express()


server.get("/", (req, res) => {
    res.status(200).send("holi")
})

server.listen(3001, "localhost", () => {
    console.log("Listening on port 3001")
})

module.exports = server