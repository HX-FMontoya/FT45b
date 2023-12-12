/* function FormValidadoHTML() {
  function handleSubmit(e) {
    e.preventDefault();
    const username = document.querySelector("input[name=username]").value;
    const password = document.querySelector("input[name=password]").value;
    const email = document.querySelector("input[name=email]").value;
    console.log(`Data a enviar: ${username} , ${password} , ${email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="username">Nombre de usuario: </label>
      <input type="text" id="username" name="username" required minlength="3" />
      <br />

      <label for="password">Contraseña: </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minlength="6"
      />
      <br />

      <label for="email">Correo electrónico: </label>
      <input type="email" id="email" name="email" required />
      <br />

      <input type="submit" value="Enviar"></input>
    </form>
  );
}

export default FormValidadoHTML; */

//? Un control extra con JS
function FormValidadoHTML() {
  function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.length < 3) {
      alert("Nombre de usuario debe tener al menos 3 caracteres.");
      return false;
    }

    if (regex.test(username)) {
      alert("Nombre de usuario debe ser w");
      return false;
    }

    if (!username.includes("A")) {
      alert("Nombre de usuario debe tener A");
      return false;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validateForm();
    if (validation) console.log("Todo ok");
    else console.log("Que mal");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label for="username">Nombre de usuario: </label>
      <input type="text" id="username" name="username" required minlength="3" />
      <br />

      <label for="password">Contraseña: </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minlength="6"
      />
      <br />

      <label for="email">Correo electrónico: </label>
      <input type="email" id="email" name="email" required />
      <br />

      <input type="submit" value="Enviar"></input>
    </form>
  );
}

export default FormValidadoHTML;
