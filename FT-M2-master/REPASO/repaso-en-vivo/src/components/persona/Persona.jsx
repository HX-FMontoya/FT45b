import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, deleteFriend } from "../../redux/actions";

export default function Persona({ persona }) {
  const [isFriend, setIsFriend] = useState(false);
  const dispatch = useDispatch();
  const amigos = useSelector((state) => state.amigos);

  const handleClick = () => {
    if (isFriend) {
      setIsFriend(false);
      dispatch(deleteFriend(persona.id));
    } else {
      setIsFriend(true);
      dispatch(addFriend(persona));
    }
  };

  useEffect(() => {
    amigos.some((amigo) => amigo.id === persona.id) && setIsFriend(true);
  }, [amigos]);
  
  return (
    <div>
      {isFriend ? (
        <button onClick={handleClick}>❤️</button>
      ) : (
        <button onClick={handleClick}>🩶</button>
      )}
      <h3>ID: {persona.id}</h3>
      <h3>NAME: {persona.name}</h3>
      <h3>USERNAME: {persona.username}</h3>
      <h3>EMAIL: {persona.email}</h3>
    </div>
  );
}
