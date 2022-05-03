"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
    personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
    ratingFilm = +prompt('На сколько оцените его?', ''),
    lastFilmX = prompt('Один из последних просмотренных фильмов?', ''),
    ratingFilmY = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = ratingFilm;
personalMovieDB.movies[lastFilmX] = ratingFilmY;

console.log(personalMovieDB);