import "./Footer.css";
import logo_f from "../../resources/Logologo.svg";

import telegram from "../../resources/Telegram.svg";
import youtube from "../../resources/Youtube.svg";
import twit from "../../resources/Twitter.svg";
import discord from "../../resources/Discord.svg";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer __container">
        <div className="footer__content">
          <a  href="#header" className="footer__logo">
            <img src={logo_f} alt="logo_f" />
          </a>
          {/* <div className="footer__text">
            Subscribe for our vacancies Make your vision real
          </div> */}
          {/* <div className="footer__form">
            <form action="#">
              <input
                required
                placeholder="Email address"
                name="email"
                type="email"
                className="footer__input"
              />
              <button type="submit" className="btn__footer">
                <img src={path} alt="path" />
              </button>
            </form>
          </div> */}
        </div>
        <div className="social__footer __container">
          <div className="social__text">
            Copyright ⓒ 2023 Overstars All rights reserved.
          </div>
          <div className="social">
            <a href="https://www.instagram.com">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="https://www.instagram.com">
              <img src={youtube} alt="telegram" />
            </a>
            <a href="https://www.instagram.com">
              <img src={twit} alt="telegram" />
            </a>
            <a href="https://www.instagram.com">
              <img src={discord} alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
