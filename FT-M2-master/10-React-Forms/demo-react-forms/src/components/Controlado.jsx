//? Formulario Semi Controlado

import { useEffect } from "react";
import { useState } from "react";

export default function Controlado() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Data a enviar: ${username} , ${password}`);
  };

  useEffect(() => {
    console.log(username);
  }, [username]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        key="username"
        name="username"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        key="password"
        name="password"
        value={password}
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
