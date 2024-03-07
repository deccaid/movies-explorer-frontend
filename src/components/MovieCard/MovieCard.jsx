import { useState } from "react";
import "./MovieCard.css";
import { useLocation } from "react-router-dom";

export default function MovieCard({ movie }) {
  const [isSaved, setIsSaved] = useState(false);
  const path = useLocation().pathname;

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <>
      <li className='card'>
        <div className='card__image-container'>
          {path === "/movies" ? (
            !isSaved ? (
              <button className='card__save-button' onClick={handleSaveClick}>
                Сохранить
              </button>
            ) : (
              <button
                className='card__save-button_type_saved'
                onClick={handleSaveClick}
              ></button>
            )
          ) : (
            <button className='card__delete'></button>
          )}
          <img className='card__image' src={movie.cardImage} alt={movie.name} />
        </div>
        <div className='card__description-container'>
          <h2 className='card__name'>{movie.name}</h2>
          <span className='card__duration'>1ч 17м</span>
        </div>
      </li>
    </>
  );
}