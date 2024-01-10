require("dotenv").config();
const { PORT, HOST } = process.env;
const server = require("./server");
const sequelize = require("./db");

server.listen(PORT, HOST, () => {
  sequelize.sync({ force: true });
  console.log(`Server listening on port: ${PORT}`);
});
