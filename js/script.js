"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastWatchedMovie1 = prompt("Один из последних просмотренных фильмов?", "");
let rateOfMovie1 = +prompt("Насколько оцените его?", "0");
let lastWatchedMovie2 = prompt("Один из последних просмотренных фильмов?", "");
let rateOfMovie2 = +prompt("Насколько оцените его?", "0");

personalMovieDB.movies[lastWatchedMovie1] = rateOfMovie1;
personalMovieDB.movies[lastWatchedMovie2] = rateOfMovie2;

console.log(personalMovieDB.movies);
