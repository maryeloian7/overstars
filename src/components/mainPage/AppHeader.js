import logo from "../resources/Logologo.svg";
import "./AppHeader.css";

import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <div className="header__container">
      <nav className="nav __containerH ">
        <div className="fix app__header ">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="item">
            <ul className={active}>
              <li className="nav__item">
                <a href="/" className="nav__link ">
                  Games
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Career
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  About us
                </a>
              </li>
              <li className="nav__item contact">
                <a href="/" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button className="btn__header">Contact</button>

          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
      <div className="background">
        <h1 className="title__header __container">OVERSTARS GAMES</h1>
      </div>
    </div>
  );

};

export default Header;
