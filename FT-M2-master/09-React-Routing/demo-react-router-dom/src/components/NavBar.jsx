import MyNavLink from "./MyNavLink";
function NavBar() {
  return (
    <nav>
      <h3> 😄 Demo</h3>
      <ul>
        <li>
          <MyNavLink name="Home" />
        </li>
        <li>
          {/* //*Como se hacia antes: */}
          {/* <a href="/about">About</a> */}
          {/* //*Como se hace ahora: */}
          <MyNavLink name="About" />
        </li>
        <li>
          <MyNavLink name="Personas" />
        </li>
      </ul>
    </nav>
  );
}
export default NavBar