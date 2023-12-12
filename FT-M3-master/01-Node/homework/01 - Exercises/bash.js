const process = require("process");
const { Z_ASCII } = require("zlib");
const commands = require("./commands/index.js");
// commands -> {pwd: fn(), date:fn(), echo, ls, cat, head, tail, curl}
// > echo hola
// hola
// >
function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on("data", function (data) {
    // data -> buffer
    const args = data.toString().trim();
    // args -> "echo hola mundo"
    // args.split -> ["echo", "hola", "mundo"]
    const [cmd, ...Arrtext] = args.split(" ");
    // text -> ["hola", "mundo"]
    const text = Arrtext.join(" ");
    // text -> "hola mundo"
    // Verifiquemos que cmd si es un comando
    if (commands[cmd]) {
      commands[cmd](print, text);
    } else {
      print(`command not found: ${cmd}`);
    }
  });
}

function print(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}
bash();
module.exports = {
  print,
  bash,
};