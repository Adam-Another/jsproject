"use strict";

let film_questions = [
"Сколько фильмов вы уже посмотрели?",
"Один из последних просмотренных фильмов?",
"Насколько оцените его?"];

let personalMovieDB = {
    count:   0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let count = film_questions.length - 1,uns= "", last_uns = "", i = 0, flag = 1;
while(i < film_questions.length) {

	uns = prompt(film_questions[i]);

	if(uns && uns != " " && uns.length <= 50) {

  	if(!personalMovieDB.count) {
    	personalMovieDB.count = +uns;
      i++;
	    continue;
      }

      if(flag % 2 === 0) {
      			uns = +uns;
      			personalMovieDB.movies[last_uns] = uns;
            flag = 1;
      } else {
      	personalMovieDB.movies[uns] = "";
        last_uns = uns;
        flag = 2;
      }

  	if(--count == 0) i = 0;
    i++;
	}
}

if(personalMovieDB.count < 10) alert("Просмотрено довольно мало фильмов...");
else if(personalMovieDB.count <= 30) alert("Вы классический зритель");
else if(personalMovieDB.count > 30)alert("Вы киноман!");
else alert("Произашла ошибка");

console.log(personalMovieDB);
