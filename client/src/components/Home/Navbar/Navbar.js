import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { links } from './navbarData';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  const handleToggle = () => {
    setShowMobile(!showMobile);
  };

  return (
    <nav className="landing__nav-container">
      <div className="landing__nav-burger">
        <h1 className="logo">
          <span className="accent-clr">Guitar</span>PA
        </h1>
        <FaBars id="burger-icon" onClick={handleToggle} />
      </div>
      <div
        className={showMobile ? 'mobile-dropdown visible' : 'mobile-dropdown'}>
        <ul className="landing__nav-center">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} className="nav-link">
                <LinkScroll
                  to={url}
                  activeClass="home__active-link"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={handleToggle}>
                  {text}
                </LinkScroll>
              </li>
            );
          })}
        </ul>

        <ul className="landing__nav-account">
          <li className="nav-link">
            <Link to="/auth">Login</Link>
          </li>
          <li className="nav-link">
            <Link to="/auth" className="accent-clr">
              Create an account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
