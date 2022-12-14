import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>LINK</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Storeis</span>
          <span>compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            totam blanditiis! Ipsam molestiae, quod neque perferendis sunt
            corrupti ea nesciunt?
          </span>
        </div>
        <div className="item">
          <h1>contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            totam blanditiis! Ipsam molestiae, quod neque perferendis sunt
            corrupti ea nesciunt?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">MiladDev</div>
          <div className="copyright">copyright 2023. All Rights Reserved</div>
        </div>
        <div className="right">
          <img src="/img/payment.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
