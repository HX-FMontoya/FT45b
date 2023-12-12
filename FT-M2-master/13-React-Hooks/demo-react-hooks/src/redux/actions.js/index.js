import { GET_POST } from "./types";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

const getPost = (id) => {
  return async function (dispatch) {
    const response = await axios(`${URL}/${id}`);
    return dispatch({
      type: GET_POST,
      payload: response.data,
    });
  };
};

export { getPost };
