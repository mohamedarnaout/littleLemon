import React from "react";
import logo from "../../media/footer-logo.png";

function Footer() {
  return (
    <div className="grid footer">
      <div className="footer-grid">
        <img src={logo} alt="" className="footer_img" />
        <div className="footer_nav footer_col">
          <h5 className="footer_col-header">Navigation</h5>
          <ul className="footer_col-list">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer_contact footer_col">
          <h5 className="footer_col-header">Contact</h5>
          <ul className="footer_col-list">
            <li>10S650 Kingery Hwy, Willowbrook, IL 60527</li>
            <li>(778)-775-7727</li>
            <li>LittleLemon@gmail.com</li>
          </ul>
        </div>
        <div className="footer_socials footer_col">
          <h5 className="footer_col-header">Find us on</h5>
          <ul className="footer_col-list">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
