import { useState, useEffect } from "react";
import { getPost } from "../redux/actions.js";
import { useDispatch } from "react-redux";

export default function Counter() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { name } = event.target;
    switch (name) {
      case "increment":
        setCount(count + 1);
        break;
      case "decrement":
        setCount(count - 1);
        break;
      case "fetch":
        dispatch(getPost(count));
        break;
      default:
        console.log("sopy del default");
    }
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button name="increment" onClick={handleClick}>
        +
      </button>
      <button name="decrement" onClick={handleClick}>
        -
      </button>
      <button name="fetch" onClick={handleClick}>
        fetch
      </button>
    </div>
  );
}
