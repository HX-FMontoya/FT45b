require("dotenv").config();
const { PORT, HOST } = process.env;
const server = require("./server");
const sequelize = require("./db");

server.listen(PORT, HOST, async () => {
  await sequelize.authenticate();
  sequelize.sync({ force: true });
  console.log("Connection has been established successfully.");
  console.log(`Server on listening ${PORT}`);
});
