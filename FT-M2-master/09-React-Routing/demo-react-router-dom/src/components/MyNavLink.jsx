import { NavLink, Link } from "react-router-dom";
import style from "./Estilos.module.css";
const MyNavLink = ({ name }) => {
  // Home -> home
  const path = name.toLowerCase().split(" ").join("")
  return (
    <NavLink
      to={`${path}`}
      className={(isActive, isPending) =>
        isActive ? style.activo : isPending ? style.noActivo : ""
      }>
      {name}
    </NavLink>
  );
};

export default MyNavLink;
