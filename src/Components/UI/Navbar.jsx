import "./navbar.css";
import { NavLink } from "react-router-dom";
import RoofAndNameLogo from "../../Logos/RoofAndNameLogo";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="content">
        <RoofAndNameLogo color="#f8ce78" />

        <div className="dropdown-menu">
          <Hamburger toggled={isOpen} toggle={() => setOpen((curr) => !curr)} />

          <div className={`dropdown-links ${isOpen ? "open" : ""}`}>
            <NavLink to={"/"} onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink to={"/about"} onClick={handleLinkClick}>
              About
            </NavLink>
            <NavLink to={"/projects"} onClick={handleLinkClick}>
              Projects
            </NavLink>
            <NavLink to={"/contact"} onClick={handleLinkClick}>
              Contact
            </NavLink>
          </div>
        </div>
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
