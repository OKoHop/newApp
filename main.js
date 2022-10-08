"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 1; i++){
            let lastFilm = prompt('Один из последних просмотренных фильмов?', '').trim(),
                ratingFilm = +prompt('На сколько оцените его?', '');
            if(lastFilm != null && ratingFilm != null && lastFilm != '' && ratingFilm != '' && lastFilm.length < 50){
                personalMovieDB.movies[lastFilm] = ratingFilm;                
            } else {                
                i--;
            }
        }
    },
    detectPersonalLevel: function  () {
        if (personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 || personalMovieDB <= 30){
            console.log('Вы классический зритель');
        }  else if (personalMovieDB.count > 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++){
            let favoriteGenres = prompt (`Ваш любимый жанр под номером ${i}`);
            if (favoriteGenres != null || favoriteGenres != '') {
                personalMovieDB.genres.push(favoriteGenres);
            } else {
                i--;
                console.log('error');
            }
        }
        personalMovieDB.genres.forEach(function (val, ind) {
            console.log(`Любимый жанр ${ind + 1} - это ${val}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
