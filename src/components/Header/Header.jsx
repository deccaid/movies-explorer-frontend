import './Header.css';
 import Logo from '../../images/logo__COLOR_main-1.svg';
// import Navigation from '../Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Header = ({ isLoggedIn }) => {
//   const location = useLocation();

  return (
    <header
      className={`header`}>
      <div className="container-movies">
        <div className='header__container'>
          <Link to="/">
            <img src={Logo} alt='Логотип' className='header__logo'></img>
            </Link>
            <Navigation isLoggedIn={isLoggedIn}/>
        </div>
      </div>
    </header>
  );
};

export default Header;