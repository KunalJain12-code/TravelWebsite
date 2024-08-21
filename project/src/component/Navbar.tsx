import React, { useState } from "react";
import "./navbar.css";
import { MenuItems } from "./menuItems";
import { Link } from "react-router-dom";
function Navbar() {
  const [pstate, nstate] = useState(false);
  function handleClick() {
    nstate(true);
  }
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={pstate ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={pstate ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((Item, index) => {
          return (
            <li key={index}>
              <Link className={Item.cName} to={Item.url}>
                <i className={Item.icon}></i>
                {Item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}
export default Navbar;
