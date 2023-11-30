import { useState } from "react";
const FormValidadoREGEX = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validateUser(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError("El usuario tiene que ser un email");
    } else {
      setError("");
    }
    setUsername(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Data a enviar: ${username} , ${password}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        key="username"
        className={error && "danger"}
        name="username"
        value={username}
        placeholder="username"
        onChange={(e) => validateUser(e.target.value)}
      />
      {!error ? null : <span>{error}</span>}
      <br />
      <input
        key="password"
        name="password"
        value={password}
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default FormValidadoREGEX;
