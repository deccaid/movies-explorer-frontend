import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./BurgerMenu.css";
import Icon from "../../images/icon__COLOR_icon-main(1).svg"

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger">
      <img className="burger__icon" src={Icon}  onClick={toggleMenu}></img>
      <div className={`burger-menu__overlay ${
          isOpen ? "burger-menu__overlay_type_opened" : ""
        }`}>
          <button className="burger__close" onClick={toggleMenu}></button>
          <Link to="/" className="burger__link">Главная</Link>
          <Link to="/movies" className="burger__link">Фильмы</Link>
          <Link to="/saved-movies" className="burger__link">Сохранённые фильмы</Link>
          <Link to='/profile' className="header__mail burger__button">Аккаунт</Link>
      </div>
    </div>
  );
};

export default BurgerMenu;  