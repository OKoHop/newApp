"use strict"
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
    personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i <= 2; i++){
//     let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//         ratingFilm = +prompt('На сколько оцените его?', '');
//     if(lastFilm != null && ratingFilm != null && lastFilm != '' && ratingFilm != '' && lastFilm.length < 50){
//         personalMovieDB.movies[lastFilm] = ratingFilm;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

let i = 0;
do {
    let lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
        ratingFilm = +prompt('На сколько оцените его?', '');
        personalMovieDB.movies[lastFilm] = ratingFilm;
        i++;
        
} while (i < 2);

console.log(personalMovieDB);

// if (personalMovieDB.count < 10){
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30){
//     console.log('Вы классический зритель');
// }  else if (personalMovieDB.count > 30){
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }