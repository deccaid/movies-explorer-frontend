import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./BurgerMenu.css";
import Icon from "../../images/icon__COLOR_icon-main(1).svg";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger">
      <img className="burger__icon" src={Icon} onClick={toggleMenu}></img>
      <div
        className={`burger-menu__overlay ${
          isOpen ? "burger-menu__overlay_type_opened" : ""
        }`}
      ></div>
      <div
        className={`burger__block ${isOpen ? "burger__block_type_open" : ""}`}
      >
        <button className="burger__close" onClick={toggleMenu}></button>
        <NavLink to="/" className="burger__link">
          Главная
        </NavLink>
        <NavLink to="/movies" className="burger__link">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="burger__link">
          Сохранённые фильмы
        </NavLink>
        <NavLink to="/profile" className="header__mail burger__button">
          Аккаунт
        </NavLink>
      </div>
    </div>
  );
};

export default BurgerMenu;
