import { NavLink } from "react-router-dom";
import RoofAndNameLogo from "../../Logos/RoofAndNameLogo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <RoofAndNameLogo color="#f8ce78" />
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
