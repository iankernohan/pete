import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <h1>Elliott & Murray Builders</h1>
        <div className="links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/projects"}>Projects</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
