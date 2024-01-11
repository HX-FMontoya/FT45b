require("dotenv").config();
const { PORT, HOST } = process.env;
const server = require("./server");
const sequelize = require("./db");

sequelize
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, HOST, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
