import logo from "../resources/Logologo.svg";
import "./AppHeader.css";

const Header = () => {
    
  return (
    
    <div className="header__container">
        <header className="header">
          <div className="app__header __container">
            <a href="/" className="logo">
              <img src={logo} alt="logo" />
            </a>
            <nav className="app__menu">
              <a href="/" className="menu__section">
                Games
              </a>
              <a href="/" className="menu__section">
                Career
              </a>
              <a href="/" className="menu__section">
                About us
              </a>
            </nav>
            <button className="btn__header">Contact</button>
          </div>
        </header>
        <div className="background">
          <h1 className="title__header __container">OVERSTARS GAMES</h1>
        </div>
    </div>
  );
};

export default Header;
