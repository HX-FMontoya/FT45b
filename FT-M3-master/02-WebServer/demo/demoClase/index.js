const http = require("http");
const fs = require("fs");
const PORT = 3001;
const HOST = "localhost";
http
  .createServer(function (req, res) {
    // req es para pedir la info que llega del cliente -> front
    // res es para dar respuesta al cliente
    const { url } = req;
    // req.params
    // req.query
    // req.body
    if (url === "html") {
      const respuesta = fs.readFileSync(
        "./prueba.html",
        "utf-8",
        (err, data) => {
          if (err) throw new Error(err);
          else return data;
        }
      );
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(respuesta);
      res.end();
    } else if (url.includes("json")) {
      const character = {
        name: "Rick",
        genre: "Male",
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(character));
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write("Hola");
      res.end();
    }
  })
  .listen(PORT, HOST, function () {
    console.log(`Server listening on port: ${PORT}`);
  });
