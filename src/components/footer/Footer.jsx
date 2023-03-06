import React from "react";
import logo from "../../media/footer-logo.png";

function Footer() {
  return (
    <div className="grid footer">
      <div className="footer-grid">
        <img src={logo} alt="" className="footer_img" />
        <div className="footer_nav"></div>
        <div className="footer_contact"></div>
        <div className="footer_socials"></div>
      </div>
    </div>
  );
}

export default Footer;
