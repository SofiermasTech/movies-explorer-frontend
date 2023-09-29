import { SHORT_FILM_TIME, HOUR } from './constant';

export const convertMinToHours = (num) => {
   const minutes = num % HOUR;
   const hours = (num - minutes) / HOUR;
   if (hours === 0) {
     return `${minutes}м`;
   } else if (minutes === 0) {
     return `${hours}ч`;
   } else {
     return `${hours}ч ${minutes}м`;
   }
 };

 export function filterShortMovies(movies) {
   return movies.filter(movie => movie.duration < SHORT_FILM_TIME);
 };
 
 export function filterMovies(movies, userQuery, moviesCheckbox) {
   const moviesByUserQuery = movies.filter((movie) => {
     const movieRu = String(movie.nameRU).toLowerCase().trim();
     const movieEn = String(movie.nameEN).toLowerCase().trim();
     const userMovie = userQuery.toLowerCase().trim();
     return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
   });
    if (moviesCheckbox) {
     return filterShortMovies(moviesByUserQuery);
   } else {
     return moviesByUserQuery;
   }
 };
 
 export const checkSavedCard = (moviesList, movie) => {
   return moviesList.find((item) => {
     return item.movieId === (movie.id || movie.movieId);
   });
 }