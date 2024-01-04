require("dotenv").config();
const { PORT, HOST } = process.env;
const server = require("./server");

server.listen(PORT, HOST, () => {
  console.log(`Server listening on port: ${PORT}`);
});
