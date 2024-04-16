import React, { useState } from 'react';
import "./MovieCard.css";
import { durationFormat } from "../../utils/utils";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ handleLikeMovie, movie, index, savedMovies  }) {
  if (!savedMovies ) {

    return null;
  }
  const isSavedOutside = savedMovies.some((m) => m.movieId === movie.movieId);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSaved, setIsSaved] = useState(isSavedOutside); 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();

  const handleSavedClick = (e) => {
    console.log(movie)
    handleLikeMovie(movie);
    if (!isSaved) {
      setIsSaved(!isSaved);
    } else {
      setIsSaved(false);
    }
  };

  return (
     <li className="card"> 
     <div className="card__image-container"> 
     <a href={movie.trailerLink} target="_blank" rel="noreferrer">
          <img className="card__image" src={movie.image} alt={movie.nameRU} />
            </a>
            {location.pathname === '/movies' ? (
          <button
            onClick={(e) => handleSavedClick(e)}
            id={'button-save'}
            type={'button'}
            aria-label={'Кнопка сохранения'}
            className={`card__button-save ${isSaved ? 'card__button-save_active' : ''}`}>
              {` ${isSaved ? '' : 'Сохранить'}`}
            </button>
        ) : (
          <button
            index={index}
            onClick={(e) => handleSavedClick(e)}
            id={'button-save-delete'}
            type={'button'}
            aria-label={'Кнопка сохранения'}
            className={'card__button-delete'}></button>
        )}
     </div> 
 
     <div className="card__description-container"> 
       <h2 className="card__name">{movie.nameRU}</h2> 
       <span className="card__duration">{durationFormat(movie.duration)}</span> 
     </div> 
   </li>
  );
}
