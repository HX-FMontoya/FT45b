import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userName } from "../../redux/actions";
import validation from "./validation";

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // name: userName , value : prueba
    setUser({
      ...user,
      [name]: value,
    });
    // aca no tengo la informacion recien actualizada
    // osea que si necesito la info de user que esta ingresando
    // no me sirve pedir user
    // {userName: "h"}
    setErrors(
      validation({
        ...user,
        [name]: value,
      })
    );
  };

  const handleSubmit = () => {
    if (user.userName === "feli01" && user.password === "hola123") {
      dispatch(userName(user.userName))
      navigate("/home");
    }
  }

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <section>
      <h1>Hola, soy la demo en vivo</h1>
      <form>
        <input
          type="text"
          name="userName"
          placeholder="feli123"
          value={user.userName}
          onChange={handleChange}
        />
        {errors.userName ? <p>{errors.userName}</p> : ""}
        <br />
        <input
          type="password"
          name="password"
          placeholder="hola123"
          value={user.password}
          onChange={handleChange}
        />
        {errors.password ? <p>{errors.password}</p> : ""}
        <br />
        <button onClick={handleSubmit}>Ingresar</button>
      </form>
    </section>
  );
}
