import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { changeName, addTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import "./Form.css";

export default function Form({ labelName, buttonName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleClick = (e) => {
    console.log("hanldeClick");
    e.preventDefault();
    switch (pathname) {
      case "/":
        dispatch(changeName(input));
        navigate("/home");
        break;
      case "/home":
        if (input.length) {
          dispatch(addTodo(input));
        }
        setInput("");
      default:
        break;
    }
  };

  return (
    <form className={pathname === "/" ? "form" : "formToDo"}>
      <h3>{labelName}</h3>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        className={pathname === "/" ? "input" : "inputToDo"}
        onKeyUp={(e) => e.key === "Enter" && handleClick(e)}
      />
      <button onClick={handleClick}>{buttonName}</button>
    </form>
  );
}
