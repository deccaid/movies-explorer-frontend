
import {SCREEN_1150, MOVIES_16 , SCREEN_800,MOVIES_12,SCREEN_650,MOVIES_8,MOVIES_5  } from "../utils/constants";

const correctMovieFormat = (movie) => {
  const newCard = JSON.parse(JSON.stringify(movie));
    newCard.country = movie.country;
    newCard.director = movie.director;
    newCard.duration = movie.duration;
    newCard.year = movie.year || '';
    newCard.description = movie.description || '';
    newCard.image = `https://api.nomoreparties.co${movie.image.url}`;
    newCard.trailerLink = movie.trailerLink || '';
    newCard.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
    newCard.movieId = movie.id;
    newCard.nameRU = movie.nameRU;
    newCard.nameEN = movie.nameEN;
    delete newCard.id;
    delete newCard.created_at;
    delete newCard.updated_at;
    return newCard;
};
function getmoviesPage (screenWidth) {
  if (screenWidth > SCREEN_1150) {
    return MOVIES_12 ;
  } else if (screenWidth > SCREEN_800) {
    return MOVIES_12;
  } else if (screenWidth > SCREEN_650) {
    return MOVIES_8;
  } else {
    return MOVIES_5;
  }
};

function durationFormat(time) {
  return `${Math.floor(time / 60)}ч ${time % 60}м`;
}




export {
  durationFormat,
  correctMovieFormat,
  getmoviesPage,
};