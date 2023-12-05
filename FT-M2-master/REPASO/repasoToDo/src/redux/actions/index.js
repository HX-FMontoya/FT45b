import { CHANGE_NAME, ADD_TODO } from "./types";

const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
};

const addTodo = (todo) => {
  console.log("addTodo");
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export { changeName, addTodo };
