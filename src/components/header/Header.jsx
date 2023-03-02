import React from "react";
import logo from "../../media/Logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="grid">
      <ul className="nav">
        <li className="nav_pic">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/" className="nav_link">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="nav_link">
            About
          </Link>
        </li>
        <li>
          <Link to="#" className="nav_link">
            menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className="nav_link">
            reservations{" "}
          </Link>
        </li>
        <li>
          <Link to="#" className="nav_link">
            order online
          </Link>
        </li>
        <li>
          <Link to="#" className="nav_link">
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
