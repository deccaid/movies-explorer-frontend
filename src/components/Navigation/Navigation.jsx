import { useMediaQuery } from "react-responsive";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


const Navigation = ({ isLoggedIn }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 1180px)` });
    return (
      <div className="navigation">
        {!isLoggedIn ? (
          <nav className="navigation__buttons">
            <Link to="/signup">
              <button className="navigation__register">Регистрация</button>
            </Link>
            <Link to="/signin">
              <button className="navigation__login">Войти</button>
            </Link>
          </nav>
        ): isMobile ? (
          <BurgerMenu />
        ) : (
          <div className="header__blocks">
          <div className="header__block">
            <Link className="header__link" to="/movies">
              Фильмы
            </Link>
            <Link className="header__link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
            </div>
            <Link to='/profile' className="header__mail">Аккаунт</Link>
            </div>
        )}
      </div>
    );
  };

export default Navigation;
