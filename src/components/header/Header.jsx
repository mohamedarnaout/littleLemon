import React from "react";
import logo from "../../media/icons_assets/Logo.svg";

function Header() {
  return (
    <nav className="grid">
      <ul className="nav">
        <li className="nav_pic">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </li>
        <li>
          <a href="#" className="nav_link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav_link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav_link">
            menu
          </a>
        </li>
        <li>
          <a href="#" className="nav_link">
            reservations{" "}
          </a>
        </li>
        <li>
          <a href="#" className="nav_link">
            order online
          </a>
        </li>
        <li>
          <a href="#" className="nav_link">
            login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
