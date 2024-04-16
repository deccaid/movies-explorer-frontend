import "./SwitchCheckbox.css";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SwitchCheckbox({ handleSearchSubmit, isShortFilm, setIsShortFilm, isShortSavedFilm, setIsShortSavedFilm }) {
  const location = useLocation();
  const [currentIsShort, setCurrentIsShort] = useState(() => {
    return location.pathname === '/movies' ? isShortFilm === true : isShortSavedFilm === true;
  });

  const handleChange = (e) => {
    const newIsShort = !currentIsShort;
    setCurrentIsShort(newIsShort);
    location.pathname === '/movies' ? setIsShortFilm(newIsShort) : setIsShortSavedFilm(newIsShort);
  }; 

  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setIsShortSavedFilm(false);
      setCurrentIsShort(false);
    } 
    else {
      const savedIsShortFilm = JSON.parse(localStorage.getItem('isShortFilm'));
      setCurrentIsShort((savedIsShortFilm) || false);      
    }
  }, [location.pathname, setIsShortSavedFilm, setCurrentIsShort]);
  return (
    <section className="switch">
      <label className="switch__label">
        <input type="checkbox" className="switch__input" checked={currentIsShort}
          onChange={handleChange} />
        <span className="switch__slider" />
      </label>
      <p className="switch__description">Короткометражки</p>
    </section>
  );
}