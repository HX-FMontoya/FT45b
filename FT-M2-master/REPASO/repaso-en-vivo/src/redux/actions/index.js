import { GET_PERSONAS, USER_NAME, DELETE_FRIEND, ADD_FRIEND } from "./types";

export function userName(name) {
  return {
    type: USER_NAME,
    payload: name,
  };
}

export function getPersona(id) {
  // id ->
  const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
  return async function (dispatch) {
    // axios(URL).then(res => res.data)
    const response = await fetch(URL).then((res) => res.json());
    // response -> {id:, name: , email:}
    return dispatch({
      type: GET_PERSONAS,
      payload: response,
    });
  };
}

const deleteFriend = (id) => {
  return {
    type: DELETE_FRIEND,
    payload: id,
  };
};

const addFriend = (persona) => {
    return {
        type: ADD_FRIEND,
        payload: persona
    }
}

export {
    deleteFriend,
    addFriend
}
