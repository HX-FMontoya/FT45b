import { useSelector } from "react-redux";
import ToDo from "../todo/ToDo";
import "./ToDos.css";

export default function ToDos() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h2>Mis ToDos</h2>
      {todos.map((todo, index) => (
        <ToDo todo={todo} key={index} />
      ))}
    </div>
  );
}
