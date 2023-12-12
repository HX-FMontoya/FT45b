import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/personas">Peronas</NavLink>
      <NavLink to="/amigos">Amigos</NavLink>
    </div>
  );
}
