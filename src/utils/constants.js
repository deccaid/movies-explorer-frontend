import thirtyThreeWord from "../images/pic__COLOR_pic-1.jpg";
import oneHundredYears from "../images/pic__COLOR_pic-2.jpg";
import banksy from "../images/pic__COLOR_pic-3.jpg";
import explosion from "../images/pic__COLOR_pic-4.jpg";
import running from "../images/pic__COLOR_pic-5.jpg";
import booktraders from "../images/pic__COLOR_pic-6.jpg";
import germany from "../images/pic__COLOR_pic-7.jpg";
import gimmeDanger from "../images/pic__COLOR_pic-8.jpg";
import jenys from "../images/pic__COLOR_pic-9.jpg";
import jump from "../images/pic__COLOR_pic-10.jpg";
import harvey from "../images/pic__COLOR_pic-11.jpg";
import waves from "../images/pic__COLOR_pic.jpg";
const SHORTMOVIES_DURATION = 40;

const SCREEN_SIZE = {
  M: 768,
  L: 1280,
};

const MOVIES_AMOUNT = {
  S: 5,
  M: 8,
  L: 16,
};

const ADDED_MOVIES_AMOUNT = {
  S: 1,
  M: 2,
  L: 4,
};

export {
  SHORTMOVIES_DURATION,
  SCREEN_SIZE,
  MOVIES_AMOUNT,
  ADDED_MOVIES_AMOUNT,
};
export const allMovies = [
  {
    name: "33 слова о дизайне",
    cardImage: thirtyThreeWord,
    _id: 1,
  },
  {
    name: "Киноальманах «100 лет дизайна»",
    cardImage: oneHundredYears,
    _id: 2,
  },
  {
    name: "В погоне за Бенкси",
    cardImage: banksy,
    _id: 3,
  },
  {
    name: "Баския: Взрыв реальности",
    cardImage: explosion,
    _id: 4,
  },
  {
    name: "Бег это свобода",
    cardImage: running,
    _id: 5,
  },
  {
    name: "Книготорговцы",
    cardImage: booktraders,
    _id: 6,
  },
  {
    name: "Когда я думаю о Германии ночью",
    cardImage: germany,
    _id: 7,
  },
  {
    name: "Gimme Danger: История Игги и The Stooges",
    cardImage: gimmeDanger,
    _id: 8,
  },
  {
    name: "Дженис: Маленькая девочка грустит",
    cardImage: jenys,
    _id: 9,
  },
  {
    name: "Соберись перед прыжком",
    cardImage: jump,
    _id: 10,
  },
  {
    name: "Пи Джей Харви: A dog called money",
    cardImage: harvey,
    _id: 11,
  },
  {
    name: "По волнам: Искусство звука в кино",
    cardImage: waves,
    _id: 12,
  },
]

export const savedMovies = [
  {
    name: "33 слова о дизайне",
    cardImage: thirtyThreeWord,
    _id: 1,
  },
  {
    name: "Киноальманах «100 лет дизайна»",
    cardImage: oneHundredYears,
    _id: 2,
  },
  {
    name: "В погоне за Бенкси",
    cardImage: banksy,
    _id: 3,
  },
]
export const SHORT_MOVIE_MAX_DURATION = 40;