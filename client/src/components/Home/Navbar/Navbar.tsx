import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { links } from './navbarData';
import { FaBars } from 'react-icons/fa';
//Components
import AccountButton from './AccountButton';
import Logo from '../../utils/Logo/Logo';

type Props = {
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<Props> = ({ setIsSignup }): JSX.Element => {
  const [showMobile, setShowMobile] = useState(false);

  const handleToggle = (): void => {
    setShowMobile(!showMobile);
  };

  return (
    <nav className="landing__nav-container">
      <div className="landing__nav-burger">
        <LinkScroll
          to="landing__hero"
          smooth={true}
          offset={-80}
          duration={500}>
          <Logo accentText="Guitar" postText="PA" />
        </LinkScroll>
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
          <AccountButton
            text="Login"
            setIsSignup={setIsSignup}
            boolean={false}
          />
          <AccountButton
            text="Create an account"
            setIsSignup={setIsSignup}
            boolean={true}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
