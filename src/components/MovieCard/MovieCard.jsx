import React from "react";
import "./MovieCard.css";
import { durationFormat } from "../../utils/utils";
import { useLocation } from "react-router-dom";

export default function MovieCard({
  movie,
  onToggleSave,
  onDeleteSave,
  checkSavedMovies,
}) {
  const pathname = useLocation().pathname;
  const isSaved = checkSavedMovies(movie);

  const handleSaveClick = () => {
    !isSaved && onToggleSave(movie);
  };

  const handleDeleteClick = () => {
    onDeleteSave(movie);
  };

  return (
    <li className="card">
      <div className="card__image-container">
        {pathname === "/movies" && (
          <button
            className={
              isSaved ? "card__button-save_active" : "card__button-save"
            }
            type="button"
            aria-label="Сохранить"
            onClick={handleSaveClick}
          >
            {!isSaved ? "Сохранить" : ""}
          </button>
        )}

        {pathname === "/saved-movies" && (
          <button
            className="card__button-delete"
            type="button"
            aria-label="Удалить"
            onClick={handleDeleteClick}
          ></button>
        )}
        <a
          target="_blank"
          rel="noreferrer"
          href={movie.trailerLink}
          className="card__link"
        >
          <img className="card__image" src={movie.image} alt={movie.nameRU} />
        </a>
      </div>

      <div className="card__description-container">
        <h2 className="card__name">{movie.nameRU}</h2>
        <span className="card__duration">{durationFormat(movie.duration)}</span>
      </div>
    </li>
  );
}
